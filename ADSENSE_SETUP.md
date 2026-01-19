# AdSense Setup Instructions

## Getting Started

1. **Sign up for Google AdSense**
   - Go to https://www.google.com/adsense/
   - Sign in with your Google account
   - Submit your website for approval (www.tubulinopathy.com)
   - Wait for approval (usually 1-2 weeks)

2. **Get Your Publisher ID**
   - Once approved, go to AdSense dashboard
   - Your Publisher ID will be in the format: `ca-pub-XXXXXXXXXX`
   - Copy this ID

3. **Create Ad Units**
   - In AdSense dashboard, go to "Ads" → "By ad unit"
   - Create new ad units (you'll need at least 4 for the placements in this site)
   - For each ad unit, choose:
     - **Display ads** (recommended)
     - **Responsive** format
   - Copy the Ad Slot ID for each unit (format: `1234567890`)

4. **Update Your Code**

   **In `index.html`:**
   - Replace `YOUR_PUBLISHER_ID` with your actual Publisher ID (e.g., `ca-pub-1234567890123`)

   **In `src/App.jsx`:**
   - Replace `YOUR_AD_SLOT_ID_1`, `YOUR_AD_SLOT_ID_2`, etc. with your actual Ad Slot IDs
   - You can use the same slot ID for multiple placements, or create different ones

   **In `src/components/AdBanner.jsx`:**
   - Replace `ca-pub-YOUR_PUBLISHER_ID` with your actual Publisher ID (optional, if you want to override the default)

## Ad Placements

The ads are currently placed at:
1. After the hero section
2. Between Causes and Variants sections
3. Between Expressions and Diagnosis sections
4. Before the footer (after Research section)

You can:
- Remove any ad placements by deleting the `<AdBanner />` components
- Add more placements by inserting `<AdBanner />` between any sections
- Customize styling by modifying the `className` prop

## Testing

- Ads won't show until your AdSense account is approved
- Use AdSense's "Test mode" to preview ads during development
- Make sure your site is accessible at the domain you registered with AdSense

## Best Practices

- Don't place too many ads (current setup has 4, which is reasonable)
- Ensure ads don't interfere with content readability
- Follow Google's AdSense policies: https://support.google.com/adsense/answer/48182
