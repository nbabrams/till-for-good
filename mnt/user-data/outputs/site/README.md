# Studio Landing Page

Minimal one-page site. Black & white, DM Sans + DM Mono, hairline accents.
Random selected-work image with a refresh button, auto-managed via GitHub Actions.

## File structure

```
/
├── index.html
├── styles.css
├── logo.png                          ← add yours
├── media/
│   ├── manifest.json                 ← auto-generated, don't hand-edit
│   ├── README.md
│   └── (your images)                 ← drop them here
├── scripts/
│   └── build-manifest.js             ← scans /media, writes manifest.json
├── .github/
│   └── workflows/
│       └── build-manifest.yml        ← runs the script on every push
└── README.md
```

## How the image library works

1. You drop images into the `media/` folder and push to GitHub.
2. The GitHub Action automatically runs `scripts/build-manifest.js`, which
   scans the folder and writes a list of filenames to `media/manifest.json`.
3. On page load, the site fetches `manifest.json`, picks a random image, and
   displays it. The "Shuffle" button (or pressing **R**) picks another.

That's it. No code changes needed when you add or remove images.

## First-time setup

### 1. Drop in your logo
- **`logo.png`** in the repo root. Square or horizontal, transparent background recommended. Displays at ~180px wide.

### 2. Add some images
- Put `.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`, or `.gif` files into `/media/`.
- Compress first (TinyPNG, Squoosh). Aim for under 500 KB each.
- Recommended size: ~1600px on the long edge.

### 3. Wire up Formspree
1. Sign up at [formspree.io](https://formspree.io) (free tier = 50/month).
2. Create a form, copy your endpoint (looks like `https://formspree.io/f/abcdwxyz`).
3. In `index.html`, find this line and replace `YOUR_FORM_ID`:
   ```html
   <form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. Submit a test message and confirm the email Formspree sends you.

The form already includes a hidden honeypot field that catches dumb bots.

### 4. Push to GitHub Pages
1. Push to `main`.
2. **Settings → Pages → Source → Deploy from a branch → main / (root)**.
3. The site will be live at `https://YOUR_USERNAME.github.io/REPO_NAME/`.

### 5. Allow the Action to push manifest updates
The workflow needs permission to commit back to the repo (it updates `manifest.json` for you).

- Go to **Settings → Actions → General**
- Scroll to **Workflow permissions**
- Select **"Read and write permissions"**
- Save

You only need to do this once.

## Adding more images later

Just drop them into `/media/` and push. The Action handles the rest.

If you want to preview locally before pushing:
```bash
node scripts/build-manifest.js
```

## Local preview

Open `index.html` directly, or run a quick local server (recommended — `fetch()` for the manifest needs http://, not file://):

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Tweaks you might want

- **Location/year** in the topbar — `index.html` near the top.
- **Manifesto copy** — inside `.manifesto-body` in `index.html`.
- **Colors** — top of `styles.css` in `:root`. The "paper" is a warm off-white (`#fafaf7`); change to `#ffffff` if you want stark.
- **Frame aspect ratio** — search for `aspect-ratio: 16 / 10` in `styles.css`.
