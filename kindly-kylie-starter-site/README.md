# Kindly, Kylie — Starter Site

This is a starter static site built from the Canva template with **SEO scaffolding** and **clear placeholders** so you can fill in text later.

## File Structure
- `index.html`, `about.html`, `services.html`, `projects.html`, `contact.html`
- `css/styles.css`
- `js/main.js`
- `assets/` (images, favicon, social preview)
- `robots.txt`, `sitemap.xml`

## How to Edit Content
Open any HTML page and look for comments like:
- `<!-- HERO HEADLINE: ... -->`
- `<!-- Replace with 2–3 sentence bio -->`
- `alt="<!-- Replace with descriptive alt text -->"`

Replace the placeholder text with your own words.

### SEO
Each page has:
- `<title>` and meta description (replace with page-specific copy)
- Open Graph + Twitter Card tags
- Breadcrumbs JSON-LD (all but Home) and Organization+Website JSON-LD (Home)
- Canonical URL (replace `WWW.YOURDOMAIN.COM`)

### Images
- Your headshot and signature are optimized into multiple sizes and formats in `/assets`.
- Replace these if needed **using the same filenames** to avoid code changes.
- Add your project images to `/assets/projects/` (create this folder) with sensible names like `living-room-modern-ivy.jpg`.

## GoDaddy Upload (cPanel / File Manager)
1. Log into GoDaddy → Hosting → cPanel → **File Manager**.
2. Open `public_html/` (or the root of your site).
3. Upload the contents of this folder (or the ZIP) there.
4. Ensure `index.html` is directly inside `public_html/`.
5. Visit your domain to verify.

## Optional
- Add a real form handler (Formspree, Netlify) later instead of `mailto:`.
- Enhance the portfolio grid filter in `js/main.js`.