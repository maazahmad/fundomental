# Logo Setup Instructions

## Adding Your Logo

1. **Navigation Logo**: Save your Fundomental Films logo image as `logo.png` in the root directory (same folder as index.html)

2. **Website Icon (Favicon)**: Create favicon files from your logo for browser tabs
   - See `FAVICON_SETUP.md` for detailed instructions
   - Use online favicon generator for easy creation

3. **Logo Requirements**:
   - Navigation logo: `logo.png` (200x200px or larger)
   - Favicon files: Multiple sizes (16x16, 32x32, 180x180)
   - Format: PNG with transparent background for best results
   - The CSS will automatically make the navigation logo white for visibility

3. **File Structure**:
   ```
   /
   ├── index.html
   ├── styles.css
   ├── script.js
   ├── logo.png          ← Your logo goes here
   └── README.md
   ```

## Current Setup

The website is now configured with:
- ✅ Hero video: Vimeo video 839875942
- ✅ Portfolio: 8 items using your video as examples
- ✅ Responsive design
- ✅ Video modal functionality

## Next Steps

1. Add your logo as `logo.png`
2. Replace the duplicate video IDs in the portfolio with your actual Vimeo video IDs
3. Upload all files to your hosting provider

## Getting More Video IDs

To add more of your videos to the portfolio:
1. Go to your Vimeo videos
2. Copy the video ID from the URL (the numbers after vimeo.com/)
3. Replace the `839875942` entries in `script.js` with your actual video IDs
4. Update the titles and descriptions to match your videos