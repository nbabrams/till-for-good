# Studio Landing Page

A minimal one-page site. Black & white, DM Sans + DM Mono, hairline accents.

## File structure

```
/
├── index.html
├── styles.css
├── logo.png          ← add yours
├── media.mp4         ← add yours (looping clip)
├── media-poster.jpg  ← add yours (image fallback / poster frame)
└── README.md
```

## Setup checklist

### 1. Drop in your assets
- **`logo.png`** — square or horizontal, transparent background recommended. Displays at ~180px wide.
- **`media.mp4`** — keep it short (5–15 sec) and compress it. Aim for under 3MB. The video loops silently.
- **`media-poster.jpg`** — a still frame shown before the video loads, and as fallback if mp4 fails.

> Tip: compress your mp4 with [Handbrake](https://handbrake.fr) or `ffmpeg -i input.mp4 -vcodec libx264 -crf 28 -preset slow -an media.mp4` (the `-an` strips audio since it's muted anyway).

### 2. Wire up Formspree
1. Go to [formspree.io](https://formspree.io) and sign up (free tier = 50 submissions/month).
2. Create a new form and copy your endpoint URL — looks like `https://formspree.io/f/abcdwxyz`.
3. In `index.html`, find this line:
   ```html
   <form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   Replace `YOUR_FORM_ID` with your actual form ID.
4. Submit a test message. Formspree will email you to confirm the address — click the link.

The form already includes a hidden honeypot field (`_gotcha`) that catches dumb spam bots.

### 3. Push to GitHub Pages
1. Create a new public repo on GitHub.
2. Commit and push these files to the `main` branch.
3. In the repo, go to **Settings → Pages**.
4. Under "Source," select **Deploy from a branch**, pick `main` / `(root)`, save.
5. Wait ~1 minute. Your site will be live at `https://YOUR_USERNAME.github.io/REPO_NAME/`.

### 4. (Optional) Custom domain
- Buy a domain.
- In GitHub Pages settings, add it under "Custom domain."
- Add a `CNAME` record at your registrar pointing to `YOUR_USERNAME.github.io`.

## Tweaks you might want

- **Change the location** in the topbar (`SAN DIEGO, CA`) — `index.html` line ~22.
- **Change "EST. 2005"** to your actual founding year — same area.
- **Adjust manifesto copy** — it's in `index.html` inside `.manifesto-body`.
- **Tune colors** — `styles.css` top, in `:root`. The "paper" is a warm off-white (`#fafaf7`). Change to pure `#ffffff` if you want stark.

## Local preview

Just open `index.html` in a browser. No build step.

If you want a quick local server (so the video loads properly without CORS issues):
```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```
