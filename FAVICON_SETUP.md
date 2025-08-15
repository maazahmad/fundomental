# Favicon Setup Instructions

## Adding Your Logo as Website Icon

To use your Fundomental Films logo as the website favicon (the small icon in browser tabs), you'll need to create several icon files from your logo image.

## Required Files

Save your logo in these formats and sizes:

1. **favicon.ico** - 16x16 or 32x32 pixels (ICO format)
2. **favicon-16x16.png** - 16x16 pixels (PNG format)
3. **favicon-32x32.png** - 32x32 pixels (PNG format)
4. **apple-touch-icon.png** - 180x180 pixels (for iOS devices)

## How to Create Favicon Files

### Option 1: Online Favicon Generator (Recommended)
1. Go to https://favicon.io/favicon-converter/
2. Upload your Fundomental Films logo image
3. Download the generated favicon package
4. Extract and upload these files to your website root directory

### Option 2: Manual Creation
1. Open your logo in an image editor (Photoshop, GIMP, etc.)
2. Resize to the required dimensions
3. Save in the specified formats
4. Name them exactly as listed above

## File Structure
```
/
├── index.html
├── styles.css
├── script.js
├── logo.png                    ← Navigation logo
├── favicon.ico                 ← Browser tab icon
├── favicon-16x16.png          ← Small favicon
├── favicon-32x32.png          ← Standard favicon
├── apple-touch-icon.png       ← iOS home screen icon
├── site.webmanifest           ← Already created
└── README.md
```

## What's Already Done

✅ HTML favicon links added to `index.html`
✅ Web manifest file created (`site.webmanifest`)
✅ Multiple favicon formats supported
✅ Mobile device compatibility included

## Testing

After uploading the favicon files:
1. Clear your browser cache
2. Refresh the website
3. Check the browser tab for your logo icon
4. Test on mobile devices

## Tips

- **Square logos work best** for favicons
- **Simple designs** are more recognizable at small sizes
- **High contrast** ensures visibility in both light and dark browser themes
- The favicon may take a few minutes to appear due to browser caching