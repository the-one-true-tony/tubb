# JSS Migration Guide

This project has been migrated from Tailwind CSS to JSS (JavaScript Style Sheets). Here's what has been done and what remains:

## Completed

1. ✅ Removed Tailwind CSS dependencies
2. ✅ Installed react-jss and JSS
3. ✅ Created theme configuration (`src/theme.js`)
4. ✅ Set up JSS Provider in layout
5. ✅ Converted main page component
6. ✅ Converted Hero component
7. ✅ Converted AdBanner component

## Remaining Components to Convert

The following components still need to be converted from Tailwind classes to JSS:

- `src/components/CausesInheritance.jsx`
- `src/components/Variants.jsx`
- `src/components/Expressions.jsx`
- `src/components/Diagnosis.jsx`
- `src/components/Statistics.jsx`
- `src/components/Support.jsx`
- `src/components/CurrentResearch.jsx`
- `src/components/Contact.jsx`
- `src/components/Sources.jsx`

## How to Convert a Component

1. Create a styles file in `src/styles/` (e.g., `componentNameStyles.js`)
2. Use `createUseStyles` from `react-jss` with the theme
3. Replace Tailwind classes with JSS classes
4. Import and use the styles hook in your component

### Example:

**Before (Tailwind):**
```jsx
<div className="bg-white p-4 rounded-lg shadow-md">
  <h2 className="text-2xl font-bold text-gray-900">Title</h2>
</div>
```

**After (JSS):**
```jsx
// componentStyles.js
import { createUseStyles } from 'react-jss'

export const useComponentStyles = createUseStyles((theme) => ({
  container: {
    backgroundColor: theme.colors.white,
    padding: theme.spacing.md,
    borderRadius: '0.5rem',
    boxShadow: theme.shadows.md,
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: theme.colors.gray[900],
  },
}))

// Component.jsx
import { useComponentStyles } from '../styles/componentStyles'

const Component = () => {
  const classes = useComponentStyles()
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Title</h2>
    </div>
  )
}
```

## Theme Reference

The theme is available in all JSS styles via the `theme` parameter:

- `theme.colors.medicalBlue` - #005b96
- `theme.colors.softBg` - #f3f4f6
- `theme.colors.gray[50-950]` - Gray scale
- `theme.colors.blue[50-900]` - Blue scale
- `theme.spacing.xs` through `theme.spacing['3xl']` - Spacing values
- `theme.breakpoints.sm` through `theme.breakpoints['2xl']` - Breakpoints
- `theme.shadows.sm/md/lg` - Shadow values

## Media Queries

Use the `@media` syntax in JSS:

```javascript
container: {
  padding: '1rem',
  '@media (min-width: 768px)': {
    padding: '2rem',
  },
}
```

Or use theme breakpoints:

```javascript
container: {
  padding: '1rem',
  [`@media (min-width: ${theme.breakpoints.md})`]: {
    padding: '2rem',
  },
}
```

## Next Steps

1. Run `npm install` to install the new dependencies
2. Convert remaining components following the pattern above
3. Test the application to ensure all styles are working correctly
