
# Kindly, Kylie — Starter Site (v2)

This starter static site is ready for **GitHub Pages** and **GoDaddy**. It uses relative paths so it previews correctly at `https://username.github.io/repo-name/`.

## Contents
- `index.html`, `about.html`, `services.html`, `projects.html`, `contact.html`
- `css/styles.css`
- `js/main.js`
- `assets/` (optimized headshot/signature, favicon, social preview)
- `robots.txt`, `sitemap.xml`

## Preview Locally
- Double-click `index.html`, or
- Run a quick server:
  ```bash
  python -m http.server 8000
  # open http://localhost:8000
  ```

## GitHub Pages
1. Push all files to repo root on the `main` branch.
2. Repo **Settings → Pages** → Source: `main` + Folder: `/ (root)` → **Save**.
3. Visit the URL GitHub shows (e.g., `https://username.github.io/repo-name/`).

## GoDaddy Deploy
1. Download ZIP of the repo (or this ZIP) and unzip.
2. In GoDaddy cPanel **File Manager**, open `public_html/`.
3. Upload all files/folders (or upload ZIP and **Extract**).
4. Ensure `index.html` is directly in `public_html/`.
5. Replace `WWW.YOURDOMAIN.COM` placeholders (HTML, robots.txt, sitemap.xml).

## Editing Content
Look for placeholder comments like:
- `<!-- HERO HEADLINE: ... -->`
- `<!-- Replace with 2–3 sentence bio -->`
- `alt="<!-- Replace with descriptive alt text -->"`

Replace with your copy. If you swap images, keep filenames the same to avoid code changes.
