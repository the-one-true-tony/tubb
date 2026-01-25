## Database: Cloudflare D1 (`tubb-db`)

This project uses **Cloudflare D1** as a SQLite-compatible database.  
Current schema is defined in `db/schema.sql` and includes a single table:

```sql
CREATE TABLE IF NOT EXISTS users (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  name          TEXT NOT NULL,
  email         TEXT NOT NULL UNIQUE,
  address       TEXT NOT NULL,
  latitude      REAL,
  longitude     REAL,
  emailable     INTEGER NOT NULL DEFAULT 0,
  researchable  INTEGER NOT NULL DEFAULT 0,
  contactable   INTEGER NOT NULL DEFAULT 0,
  created_at    TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at    TEXT
);
```

---

## 1. Creating / Updating the Schema

- **Source of truth**: `db/schema.sql`
- To apply (or re-apply) the schema to the **local** D1 database:

```bash
npx wrangler d1 execute tubb-db --file=./db/schema.sql
```

- To apply changes to the **remote** D1 instance (in Cloudflare):

```bash
npx wrangler d1 execute tubb-db --remote --file=./db/schema.sql
```

> Tip: when you evolve the schema, add new migration SQL files and execute them in order instead of overwriting `schema.sql`.

---

## 2. Inspecting the Database

### See table definition

```bash
npx wrangler d1 execute tubb-db \
  --command="SELECT sql FROM sqlite_schema WHERE name = 'users' AND type = 'table';"
```

### Inspect columns

```bash
npx wrangler d1 execute tubb-db \
  --command="PRAGMA table_info(users);"
```

### List first 10 users

```bash
npx wrangler d1 execute tubb-db --command="SELECT * FROM users LIMIT 10;"
```

> Add `--remote` to any of the above commands to run against the hosted D1 instance instead of the local one.

---

## 3. Inserting / Updating Users Manually

### Insert a user

```bash
npx wrangler d1 execute tubb-db --command="
INSERT INTO users (
  name, email, address,
  latitude, longitude,
  emailable, researchable, contactable
) VALUES (
  'Ada Lovelace', 'ada@example.com', '123 Example St, London',
  51.5074, -0.1278,
  1, 1, 1
);
"
```

### Update a user

```bash
npx wrangler d1 execute tubb-db --command="
UPDATE users
SET emailable = 0, updated_at = datetime('now')
WHERE email = 'ada@example.com';
"
```

### Delete a user

```bash
npx wrangler d1 execute tubb-db --command="
DELETE FROM users WHERE email = 'ada@example.com';
"
```

---

## 4. Using D1 in Next.js API Routes

In the Cloudflare Worker runtime (what OpenNext produces), you access D1 via a binding (e.g. `env.DB` or `env.tubb_db`, depending on your `wrangler.toml`).

Basic pattern for an API route:

```js
// Example (pseudo-code) using env.DB
export async function POST(request, env) {
  const body = await request.json();

  const { name, email, address } = body;

  // Simple insert
  await env.DB.prepare(
    `INSERT INTO users (name, email, address)
     VALUES (?1, ?2, ?3)`
  )
    .bind(name, email, address)
    .run();

  return Response.json({ ok: true });
}
```

> Note: The exact signature of your route function (`(request, env, ctx)`) depends on how OpenNext wires environment bindings into the Worker. When you implement your real route, follow the pattern used in the generated Worker or OpenNext docs, but the D1 usage (`env.DB.prepare(...).bind(...).run()`) stays the same.

---

## 5. Backing Up the Database

Use Wrangler to export the D1 database:

```bash
mkdir -p backups
npx wrangler d1 export tubb-db --remote --output=backups/tubb-$(date +%Y%m%d-%H%M%S).sql
```

This creates a SQL dump you can commit (if it’s demo data) or store safely elsewhere.

To restore into a local dev DB:

```bash
npx wrangler d1 execute tubb-db --file=backups/tubb-YYYYMMDDHHMMSS.sql
```

---

## 6. Connecting to D1 via n8n (Workflow Automation)

Cloudflare D1 doesn't have a native n8n connector, but you can connect via HTTP requests to your API endpoints or create a custom API wrapper.

### Option 1: Use Existing API Endpoints (Recommended)

Your Next.js app already has API routes that interact with D1. Use n8n's HTTP Request node to call these endpoints:

**Example: Fetch Users**
- **Method:** GET
- **URL:** `https://your-domain.com/api/users`
- **Authentication:** None (or add API key if you implement auth)

**Example: Create User**
- **Method:** POST
- **URL:** `https://your-domain.com/api/users`
- **Headers:** `Content-Type: application/json`
- **Body:**
```json
{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john@example.com",
  "address": "123 Main St",
  "latitude": 40.7128,
  "longitude": -74.0060,
  "emailable": true,
  "researchable": true,
  "contactable": true
}
```

### Option 2: Create a D1 API Wrapper

Create a new API route (`/api/d1`) that accepts SQL queries via HTTP:

```javascript
// src/app/api/d1/route.js
import { getCloudflareContext } from '@opennextjs/cloudflare';

export async function POST(request) {
  try {
    const { query, params = [] } = await request.json();
    
    let env;
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

**Security Note:** Add authentication/authorization before exposing SQL queries directly!

### Option 3: Use Cloudflare API (Advanced)

You can use Cloudflare's REST API to interact with D1, but this requires:
- Cloudflare API token with D1 permissions
- More complex setup

**n8n HTTP Request Configuration:**
- **Method:** POST
- **URL:** `https://api.cloudflare.com/client/v4/accounts/{account_id}/d1/database/{database_id}/query`
- **Headers:**
  - `Authorization: Bearer {your_api_token}`
  - `Content-Type: application/json`
- **Body:**
```json
{
  "sql": "SELECT * FROM users LIMIT 10",
  "params": []
}
```

### Recommended Approach

For n8n workflows, **Option 1** (using your existing API endpoints) is the safest and most maintainable approach. It:
- Uses your existing authentication/authorization
- Maintains data validation
- Keeps business logic in your application
- Is easier to debug and maintain

---

## 7. Local vs Hosted Summary

- **Schema**: maintained in `db/schema.sql`, applied via `wrangler d1 execute`.
- **Local data**: manipulated with `npx wrangler d1 execute tubb-db ...`.
- **Hosted data**: same commands with `--remote` flag.
- **Backups**: use `wrangler d1 export` for hosted DB; keep dumps in `backups/`.
- **n8n Integration**: use HTTP Request nodes to call your API endpoints.

