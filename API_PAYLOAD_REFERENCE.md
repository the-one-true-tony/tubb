# API Payload Reference: POST /api/users

## Endpoint
**POST** `https://your-domain.com/api/users`

## Headers

### Required
- `Content-Type: application/json`

### Optional (for API key authentication)
- `x-api-key: your-api-key-here` (if `USERS_API_KEY` is set in environment)

## Request Body (JSON)

### Required Fields
- `name` (string, min 2 characters) - Full name
- `email` (string, valid email format) - Email address (must be unique)
- `address` (string, min 5 characters) - Physical address

### Optional Fields
- `latitude` (number, -90 to 90) - Latitude coordinate
- `longitude` (number, -180 to 180) - Longitude coordinate
- `birthdate` (string, YYYY-MM-DD format) - Date of birth
- `tubulin_variant` (string) - One of: `TUBA1A`, `TUBB2B`, `TUBB3`, `TUBB2A`, `TUBB`, `TUBA8`, `Other`
- `emailable` (boolean, default: `true`) - Can be contacted by email
- `researchable` (boolean, default: `true`) - Open to research opportunities
- `contactable` (boolean, default: `true`) - Can be contacted by other families

## Example Payloads

### Minimal (Required Fields Only)
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "address": "123 Main Street, City, State 12345"
}
```

### Complete Example
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "address": "456 Oak Avenue, Los Angeles, CA 90001",
  "latitude": 34.0522,
  "longitude": -118.2437,
  "birthdate": "2015-03-20",
  "tubulin_variant": "TUBA1A",
  "emailable": true,
  "researchable": true,
  "contactable": true
}
```

### With Geocoded Address
```json
{
  "name": "Bob Johnson",
  "email": "bob@example.com",
  "address": "789 Pine Road, New York, NY 10001",
  "latitude": 40.7128,
  "longitude": -74.0060,
  "birthdate": "2012-07-15",
  "tubulin_variant": "TUBB2B",
  "emailable": false,
  "researchable": true,
  "contactable": true
}
```

## Response

### Success (200)
```json
{
  "ok": true
}
```

### Error Responses

**400 Bad Request** - Validation error
```json
{
  "error": "Name must be at least 2 characters, Valid email is required"
}
```

**409 Conflict** - Duplicate email
```json
{
  "error": "An account with this email already exists."
}
```

**429 Too Many Requests** - Rate limit exceeded
```json
{
  "error": "Too many requests. Please try again later."
}
```

**401 Unauthorized** - Invalid/missing API key (if API key is required)
```json
{
  "error": "Unauthorized. API key required."
}
```

**500 Internal Server Error**
```json
{
  "error": "Failed to save your details. Please try again later."
}
```

## n8n HTTP Request Configuration

### Node Settings
- **Method:** POST
- **URL:** `https://your-domain.com/api/users`
- **Authentication:** None (or Header Auth if using API key)

### Headers
```
Content-Type: application/json
x-api-key: your-api-key-here (optional)
```

### Body (JSON)
```json
{
  "name": "{{ $json.name }}",
  "email": "{{ $json.email }}",
  "address": "{{ $json.address }}",
  "latitude": {{ $json.latitude }},
  "longitude": {{ $json.longitude }},
  "birthdate": "{{ $json.birthdate }}",
  "tubulin_variant": "{{ $json.tubulin_variant }}",
  "emailable": {{ $json.emailable }},
  "researchable": {{ $json.researchable }},
  "contactable": {{ $json.contactable }}
}
```

## Field Validation Rules

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| `name` | string | Yes | Min 2 characters, trimmed |
| `email` | string | Yes | Valid email format, lowercase, unique |
| `address` | string | Yes | Min 5 characters, trimmed |
| `latitude` | number | No | Between -90 and 90 |
| `longitude` | number | No | Between -180 and 180 |
| `birthdate` | string | No | Format: YYYY-MM-DD |
| `tubulin_variant` | string | No | One of: TUBA1A, TUBB2B, TUBB3, TUBB2A, TUBB, TUBA8, Other |
| `emailable` | boolean | No | Default: true |
| `researchable` | boolean | No | Default: true |
| `contactable` | boolean | No | Default: true |

## cURL Example

```bash
curl -X POST https://your-domain.com/api/users \
  -H "Content-Type: application/json" \
  -H "x-api-key: your-api-key-here" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "address": "123 Main St, City, State 12345",
    "latitude": 40.7128,
    "longitude": -74.0060,
    "birthdate": "2010-05-15",
    "tubulin_variant": "TUBA1A",
    "emailable": true,
    "researchable": true,
    "contactable": true
  }'
```

## JavaScript/Fetch Example

```javascript
const response = await fetch('https://your-domain.com/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': 'your-api-key-here' // optional
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    address: '123 Main St, City, State 12345',
    latitude: 40.7128,
    longitude: -74.0060,
    birthdate: '2010-05-15',
    tubulin_variant: 'TUBA1A',
    emailable: true,
    researchable: true,
    contactable: true
  })
});

const result = await response.json();
console.log(result);
```
