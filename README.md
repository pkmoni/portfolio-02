# Monisha PK — Digital Marketing Portfolio

A responsive, static HTML/CSS/vanilla JavaScript portfolio, ready for GitHub Pages or Vercel.

## Files
- `index.html` — page content and SEO metadata
- `style.css` — responsive dark/neon visual design
- `script.js` — project data, category filters, mobile menu, animations and contact form
- `assets/profile.jpg` — current profile photo
- `assets/resume.pdf` — current uploaded resume PDF
- `assets/favicon.svg` — editable favicon

## Run locally
Open `index.html` in a browser. For a local development server, open this folder in VS Code and use Live Server, or run `python -m http.server 8000` from this folder and visit `http://localhost:8000`.

## Replace the profile photo
Replace `assets/profile.jpg` with your new image, keeping the same filename. A JPG or WebP image with a portrait orientation works well. If the image cannot load, the site displays a fallback.

## Replace the resume PDF
Replace `assets/resume.pdf` with your updated PDF and keep the filename. Both resume download buttons use this path.

## Edit project and social links
Open `script.js`.
- Update `socialLinks` at the top with your confirmed LinkedIn, Facebook and GitHub URLs.
- Edit the `projects` array to update names, categories, descriptions and project links.
- For a missing URL, keep `url: ""`; the site shows a disabled “coming soon” link. Do not add a URL unless it is confirmed.
- The MarkoSeries Facebook URL is currently set to the Facebook page supplied in the project brief.
- For Optimist Laptop Service, add its Google Business Profile URL in the second link object when available.
- To add project thumbnails/logos, place image files in `assets/` and update the project data/render function in `script.js`. Current cards use original abstract monogram visuals, not fabricated client logos or screenshots.

## Contact form
The form validates required fields and opens a prefilled `mailto:` draft. It does not send email directly. To collect messages without requiring the visitor's email app, connect a form service (for example Formspree) or your own backend.

## Deploy to Vercel
1. Put this folder in a Git repository and push it to GitHub.
2. Sign in to Vercel and choose **Add New → Project**.
3. Import the repository.
4. For a static site, leave the framework preset as **Other**. Leave build command and output directory blank (or set output directory to `.` if required by the dashboard).
5. Deploy. Vercel will serve `index.html` from the project root.
6. After changing files, commit and push to GitHub; Vercel will redeploy automatically.

## Deploy to GitHub Pages
1. Push the folder contents to a GitHub repository.
2. In repository **Settings → Pages**, choose deployment from the `main` branch and `/ (root)`.
3. Save and wait for the published URL.
