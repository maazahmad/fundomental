# Fundomental Films Portfolio Website

A modern, responsive portfolio website for Fundomental Films video production and editing agency.

## Features

- **Modern Design**: Clean, professional layout inspired by contemporary video production studios
- **Responsive**: Fully responsive design that works on all devices
- **Video Portfolio**: Grid layout showcasing video work with hover effects
- **Smooth Animations**: CSS animations and JavaScript interactions
- **Contact Form**: Functional contact form for client inquiries
- **Mobile Navigation**: Hamburger menu for mobile devices

## Setup Instructions

1. **Upload Files**: Upload all files to your shared hosting provider
2. **Add Logo**: Save the provided Fundomental Films logo as `logo.png` in the root directory
3. **Add Hero Video**: Add a background video file as `hero-video.mp4` (optional)
4. **Update Portfolio**: The portfolio currently links to your main Vimeo page - update with specific video IDs as needed
5. **Update Contact Info**: Modify contact details in `index.html`

## Logo Setup

The website expects your logo file to be named `logo.png` and placed in the root directory. The CSS automatically:
- Makes the logo white for visibility on the dark navigation
- Scales it appropriately for both desktop and mobile
- Maintains aspect ratio

## Customization

### Adding Specific Videos

The portfolio currently shows 8 sample projects that link to your main Vimeo page. To add specific videos:

1. Open `script.js`
2. Find the `workItems` array
3. Replace the generic entries with your actual videos

Example for a specific video:
```javascript
{
    title: "Your Video Title",
    description: "Brief description of the project",
    videoId: "123456789", // Vimeo video ID from URL
    thumbnail: "https://i.vimeocdn.com/video/123456789-640x360.jpg",
    vimeoUrl: "https://vimeo.com/123456789"
}
```

To get Vimeo thumbnails:
- Use format: `https://i.vimeocdn.com/video/[VIDEO_ID]-640x360.jpg`
- Replace `[VIDEO_ID]` with your actual Vimeo video ID

### Updating Colors

The main brand color is set to `#ff6b6b` (coral red). To change it:
1. Open `styles.css`
2. Find and replace `#ff6b6b` with your preferred color
3. Also update `#ff5252` (hover state) to a darker shade of your color

### Adding Your Logo

1. Save your logo as `logo.png` in the root directory
2. Ensure it's a transparent PNG for best results
3. The logo will automatically scale to fit the navigation

## File Structure

```
/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
├── logo.png           # Your logo (add this)
├── hero-video.mp4     # Hero background video (add this)
└── README.md          # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Tips

1. **Optimize Images**: Compress your logo and any images
2. **Video Optimization**: Keep hero video under 10MB for faster loading
3. **Lazy Loading**: Videos load on demand when clicked
4. **Minification**: Consider minifying CSS and JS for production

## Contact Form

The contact form currently shows an alert when submitted. To make it functional:

1. **Option 1**: Use a service like Formspree, Netlify Forms, or EmailJS
2. **Option 2**: Create a server-side script (PHP, Node.js, etc.)
3. **Option 3**: Use your hosting provider's form handling service

## Hosting Requirements

- Standard shared hosting with HTML/CSS/JS support
- No special server requirements
- Works with any hosting provider (GoDaddy, Bluehost, SiteGround, etc.)

## Next Steps

1. Upload files to your hosting
2. Add your logo and hero video
3. Update the portfolio with your actual Vimeo videos
4. Test the contact form functionality
5. Update contact information and social links

## Support

For customization help or questions about implementation, refer to the comments in the code files.