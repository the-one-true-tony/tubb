# Cloudflare D1 Backup & n8n Integration Guide

## Backing Up Cloudflare D1 Database

### Quick Backup Commands

**Export remote database (production):**
```bash
mkdir -p backups
npx wrangler d1 export tubb-db --remote --output=backups/tubb-$(date +%Y%m%d-%H%M%S).sql
```

**Windows PowerShell:**
```powershell
New-Item -ItemType Directory -Force -Path backups
$timestamp = Get-Date -Format "yyyyMMdd-HHmmss"
npx wrangler d1 export tubb-db --remote --output="backups/tubb-$timestamp.sql"
```

**Export local database (development):**
```bash
npx wrangler d1 export tubb-db --output=backups/tubb-local-$(date +%Y%m%d-%H%M%S).sql
```

### Automated Backup Script

Create `backup-d1.sh`:

```bash
#!/bin/bash
BACKUP_DIR="backups"
TIMESTAMP=$(date +%Y%m%d-%H%M%S)
FILENAME="$BACKUP_DIR/tubb-$TIMESTAMP.sql"

mkdir -p $BACKUP_DIR
npx wrangler d1 export tubb-db --remote --output=$FILENAME

echo "Backup created: $FILENAME"

# Optional: Keep only last 30 days of backups
find $BACKUP_DIR -name "tubb-*.sql" -mtime +30 -delete
```

Make it executable:
```bash
chmod +x backup-d1.sh
```

Run it:
```bash
./backup-d1.sh
```

### Restore from Backup

**Restore to local:**
```bash
npx wrangler d1 execute tubb-db --file=backups/tubb-YYYYMMDDHHMMSS.sql
```

**Restore to remote:**
```bash
npx wrangler d1 execute tubb-db --remote --file=backups/tubb-YYYYMMDDHHMMSS.sql
```

### Schedule Automated Backups

**Using cron (Linux/Mac):**
```bash
# Edit crontab
crontab -e

# Add daily backup at 2 AM
0 2 * * * cd /path/to/tubb && ./backup-d1.sh
```

---

## Connecting n8n to Cloudflare D1

Cloudflare D1 doesn't have a native n8n connector, but you have three options:

### Option 1: Use Your Existing API Endpoints (Recommended)

Your Next.js app already has API routes. Use n8n's **HTTP Request** node:

#### Fetch Users (GET)

**n8n Configuration:**
- **Node:** HTTP Request
- **Method:** GET
- **URL:** `https://your-domain.com/api/users`
- **Authentication:** None (or add API key if implemented)

**Response:**
```json
{
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "address": "123 Main St",
      "latitude": 40.7128,
      "longitude": -74.0060,
      "contactable": 1
    }
  ],
  "count": 1
}
```

#### Create User (POST)

**n8n Configuration:**
- **Node:** HTTP Request
- **Method:** POST
- **URL:** `https://your-domain.com/api/users`
- **Headers:**
  - `Content-Type: application/json`
- **Body (JSON):**
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "address": "456 Oak Ave",
  "latitude": 34.0522,
  "longitude": -118.2437,
  "emailable": true,
  "researchable": true,
  "contactable": true
}
```

### Option 2: Create a Custom D1 API Wrapper

Create a new API route for direct SQL queries:

**File:** `src/app/api/d1/route.js`

```javascript
import { getCloudflareContext } from '@opennextjs/cloudflare';

export async function POST(request) {
  try {
    // Get environment from Cloudflare context
    let env;
    try {
      ({ env } = getCloudflareContext());
    } catch {
      return Response.json(
        { error: 'Database is not available in this environment.' },
        { status: 500 },
      );
    }

    // Add authentication here!
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${env.D1_API_KEY}`) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { query, params = [] } = await request.json();
    try {
      ({ env } = getCloudflareContext());
    } catch {
      return Response.json(
        { error: 'Database not available' },
        { status: 500 }
      );
    }

    const db = env.DB;
    const stmt = db.prepare(query);
    const result = await stmt.bind(...params).all();
    
    return Response.json({ data: result.results });
  } catch (err) {
    return Response.json(
      { error: err.message },
      { status: 500 }
    );
  }
}
```

**n8n Configuration:**
- **Method:** POST
- **URL:** `https://your-domain.com/api/d1`
- **Headers:**
  - `Authorization: Bearer YOUR_API_KEY`
  - `Content-Type: application/json`
- **Body:**
```json
{
  "query": "SELECT * FROM users WHERE contactable = 1",
  "params": []
}
```

### Option 3: Use Cloudflare REST API (Advanced)

**Get your Account ID and Database ID:**
- Account ID: Found in Cloudflare dashboard URL or `wrangler.toml`
- Database ID: `c23e3cbe-6c51-4e82-b23b-7ed7ecb96029` (from `wrangler.toml`)

**Create Cloudflare API Token:**
1. Go to Cloudflare Dashboard → My Profile → API Tokens
2. Create token with `Account.Cloudflare D1:Edit` permission
3. Copy the token

**n8n Configuration:**
- **Method:** POST
- **URL:** `https://api.cloudflare.com/client/v4/accounts/{ACCOUNT_ID}/d1/database/{DATABASE_ID}/query`
- **Headers:**
  - `Authorization: Bearer YOUR_CLOUDFLARE_API_TOKEN`
  - `Content-Type: application/json`
- **Body:**
```json
{
  "sql": "SELECT * FROM users LIMIT 10",
  "params": []
}
```

### Recommended Approach

**Use Option 1** (existing API endpoints) because it:
- ✅ Uses your existing authentication/authorization
- ✅ Maintains data validation
- ✅ Keeps business logic in your application
- ✅ Is easier to debug and maintain
- ✅ Follows REST best practices

### Example n8n Workflow

1. **Trigger:** Webhook or Schedule
2. **HTTP Request:** GET `/api/users`
3. **Process Data:** Filter/transform user data
4. **HTTP Request:** POST to another service (email, Slack, etc.)

---

## Database Information

- **Database Name:** `tubb-db`
- **Database ID:** `c23e3cbe-6c51-4e82-b23b-7ed7ecb96029`
- **Binding:** `DB` (in wrangler.toml)
- **Type:** SQLite-compatible (Cloudflare D1)

For more details, see `DB_INTERACTION.md`.

---

## Geocoding Addresses in n8n (Address → Lat/Lon)

n8n doesn't have a dedicated geocoding node, but you can use the **HTTP Request** node with the **Google Maps Geocoding API** to convert addresses to latitude/longitude.

### Setup Google Maps Geocoding API

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Enable the **Geocoding API**
3. Create an API key with Geocoding API permissions
4. Copy your API key

### n8n HTTP Request Configuration

**Node:** HTTP Request

**Configuration:**
- **Method:** GET
- **URL:** `https://maps.googleapis.com/maps/api/geocode/json`
- **Query Parameters:**
  - `address`: `{{ $json.address }}` (or your address field)
  - `key`: `YOUR_GOOGLE_MAPS_API_KEY`

**Example URL:**
```
https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY
```

### Response Structure

The API returns:
```json
{
  "results": [
    {
      "geometry": {
        "location": {
          "lat": 37.4224764,
          "lng": -122.0842499
        }
      },
      "formatted_address": "1600 Amphitheatre Parkway, Mountain View, CA 94043, USA"
    }
  ],
  "status": "OK"
}
```

### Extract Lat/Lon in n8n

Add a **Code** node or use **Set** node to extract coordinates:

**Code Node (JavaScript):**
```javascript
const geocodeResult = $input.item.json;
const location = geocodeResult.results[0].geometry.location;

return {
  json: {
    address: geocodeResult.results[0].formatted_address,
    latitude: location.lat,
    longitude: location.lng
  }
};
```

**Or use Set Node:**
- Add field: `latitude` = `{{ $json.results[0].geometry.location.lat }}`
- Add field: `longitude` = `{{ $json.results[0].geometry.location.lng }}`

### Complete Workflow Example

1. **Trigger:** Webhook (receives address)
2. **HTTP Request:** Geocode address
   - URL: `https://maps.googleapis.com/maps/api/geocode/json?address={{ $json.address }}&key=YOUR_KEY`
3. **Code/Set Node:** Extract lat/lon
4. **HTTP Request:** POST to `/api/users` with lat/lon

### Alternative: Use Your Existing API

Since your Next.js app already uses Google Places Autocomplete (in Contact.jsx), you could:

1. Create a geocoding endpoint: `/api/geocode`
2. Use HTTP Request in n8n to call it
3. This keeps your API key server-side

**Example API Route:**
```javascript
// src/app/api/geocode/route.js
import { getCloudflareContext } from '@opennextjs/cloudflare';

export async function GET(request) {
  const { env } = getCloudflareContext();
  const { searchParams } = new URL(request.url);
  const address = searchParams.get('address');
  
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY}`
  );
  
  const data = await response.json();
  return Response.json(data);
}
```

Then in n8n:
- **URL:** `https://your-domain.com/api/geocode?address={{ $json.address }}`

This approach keeps your API key secure and allows you to add rate limiting, caching, etc.
