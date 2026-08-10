# Media Upload Guide

This guide explains how to add photos and videos to your portfolio.

## Directory Structure

```
public/
├── images/
│   ├── hero.jpg              # Your profile photo for the hero section
│   └── projects/
│       ├── nike-campaign-poster.svg
│       ├── nike-campaign-1.svg
│       ├── nike-campaign-2.svg
│       ├── nike-campaign-3.svg
│       ├── travel-film-poster.svg
│       ├── travel-film-1.svg
│       ├── travel-film-2.svg
│       ├── travel-film-3.svg
│       ├── short-film-poster.svg
│       ├── short-film-1.svg
│       ├── short-film-2.svg
│       └── short-film-3.svg
└── videos/
    ├── showreel.mp4          # Main showreel video
    └── projects/
        ├── nike-showreel.mp4
        ├── travel-showreel.mp4
        └── short-showreel.mp4
```

## Adding Your Profile Photo

1. **Prepare your photo:**
   - Recommended size: 800x1000px or similar portrait ratio
   - Format: JPG, PNG, or WebP
   - File size: Keep under 2MB for optimal loading

2. **Upload the photo:**
   - Place your photo in `/public/images/` directory
   - Name it `hero.jpg` (or `hero.png`)

3. **Update the Hero section:**
   - Open `src/sections/Hero.astro`
   - Replace the placeholder div with:
   ```astro
   <img 
     src="/images/hero.jpg" 
     alt="Simon Mészáros" 
     class="w-full h-full object-cover"
   />
   ```

## Adding Project Images

1. **For each project, you need:**
   - **Poster image**: Main thumbnail displayed in project cards
   - **Gallery images**: Additional images for the project detail page (3-4 recommended)

2. **Upload steps:**
   - Place poster images in `/public/images/projects/`
   - Name format: `{project-slug}-poster.{ext}`
   - Place gallery images in the same directory
   - Name format: `{project-slug}-{1,2,3}.{ext}`

3. **Update project data:**
   - Open `src/data/projects.ts`
   - Update the `image` and `gallery` arrays with your file paths

## Adding Project Videos

1. **Video requirements:**
   - Format: MP4 (H.264 codec recommended)
   - Resolution: 1080p (1920x1080) or higher
   - Bitrate: 5-10 Mbps for 1080p
   - Audio: AAC, 128kbps or higher
   - File size: Keep under 50MB per video for web performance

2. **Upload steps:**
   - Place videos in `/public/videos/projects/`
   - Name format: `{project-slug}-showreel.mp4`

3. **Update project data:**
   - Open `src/data/projects.ts`
   - Update the `video` field with your file path

## Adding a New Project

1. **Prepare your media:**
   - Create project poster image
   - Create 3-4 gallery images
   - Prepare project video (optional)

2. **Upload media:**
   - Place all files in `/public/images/projects/` and `/public/videos/projects/`

3. **Add project entry:**
   - Open `src/data/projects.ts`
   - Add new project object:
   ```typescript
   {
     slug: "your-project-slug",
     title: "Project Title",
     category: "Commercial", // or "Personal", "School"
     year: 2026,
     image: "/images/projects/your-project-poster.jpg",
     video: "/videos/projects/your-project-showreel.mp4",
     featured: true,
     description: "Brief description of the project",
     details: "More detailed information about the project",
     technologies: ["Technology 1", "Technology 2"],
     gallery: [
       "/images/projects/your-project-1.jpg",
       "/images/projects/your-project-2.jpg",
       "/images/projects/your-project-3.jpg",
     ],
   }
   ```

## Image Optimization Tips

1. **Use modern formats:**
   - WebP for photos (30% smaller than JPEG)
   - SVG for graphics/logos

2. **Compress images:**
   - Use tools like TinyPNG, Squoosh, or ImageOptim
   - Target: Under 500KB per image

3. **Responsive images:**
   - For hero photo: Provide multiple sizes if needed
   - Use appropriate dimensions for each use case

## Video Optimization Tips

1. **Compression:**
   - Use HandBrake or FFmpeg
   - Preset: "Web Optimized" or "Fast 1080p30"
   - Constant Quality RF: 20-23

2. **Hosting large videos:**
   - For videos >50MB, consider using:
     - Vimeo (recommended for portfolios)
     - YouTube (unlisted)
     - Cloud storage with CDN
   - Embed using iframe instead of direct hosting

## Testing Your Media

1. **Local testing:**
   - Run `npm run dev`
   - Navigate to your portfolio
   - Check all images load correctly
   - Test video playback

2. **Performance check:**
   - Use browser DevTools (Network tab)
   - Check load times
   - Optimize if files are too large

## Troubleshooting

**Images not loading:**
- Check file paths are correct (start with `/`)
- Verify files are in the `public/` directory
- Check file extensions match

**Videos not playing:**
- Ensure video format is MP4 with H.264
- Check file size isn't too large
- Test video in different browsers

**Slow loading:**
- Compress images further
- Consider lazy loading for gallery images
- Use video hosting services for large files

## Contact Information Updates

Don't forget to update your contact details in `src/sections/Contact.astro`:
- Email address
- Instagram handle
- LinkedIn profile
- Vimeo portfolio URL
