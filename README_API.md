# Next.js API Routes

This project now includes Next.js backend API routes. Here's how to use them:

## Available API Endpoints

### 1. Hello API
**GET** `/api/hello`
- Simple test endpoint
- Returns: `{ message: string, timestamp: string }`

### 2. Contact Form API
**POST** `/api/contact`
- Handles contact form submissions
- Body: `{ name: string, email: string, message: string }`
- Returns: `{ success: boolean, message: string, timestamp: string }`

### 3. Statistics API
**GET** `/api/statistics`
- Returns statistical data about tubulinopathies
- Returns: `{ prevalence: object, cases: object, genes: object, lastUpdated: string }`

### 4. Variants API
**GET** `/api/variants?gene=TUBA1A` (optional query parameter)
- Returns variant data
- Query params: `gene` (optional) - filter by gene name
- Returns: `{ variants: array, count: number, timestamp: string }`

## Development

Run the development server:
```bash
npm run dev
```

The API routes will be available at `http://localhost:3000/api/*`

## Example Usage

### Fetching Statistics
```javascript
const response = await fetch('/api/statistics')
const data = await response.json()
console.log(data)
```

### Submitting Contact Form
```javascript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    message: 'Hello, I have a question...'
  })
})
const result = await response.json()
```

### Fetching Variants
```javascript
// Get all variants
const allVariants = await fetch('/api/variants').then(r => r.json())

// Get variants for specific gene
const tuba1aVariants = await fetch('/api/variants?gene=TUBA1A').then(r => r.json())
```

## Next Steps

To extend the backend functionality:

1. **Add Database Integration**: Connect to a database (PostgreSQL, MongoDB, etc.)
2. **Add Authentication**: Implement user authentication if needed
3. **Add Email Service**: Integrate with SendGrid, Resend, or similar for contact forms
4. **Add Data Validation**: Use libraries like Zod for request validation
5. **Add Error Handling**: Implement comprehensive error handling and logging

## File Structure

```
src/app/api/
├── hello/
│   └── route.js          # GET /api/hello
├── contact/
│   └── route.js          # POST /api/contact
├── statistics/
│   └── route.js          # GET /api/statistics
└── variants/
    └── route.js          # GET /api/variants
```
