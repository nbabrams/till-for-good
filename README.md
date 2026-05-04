# Media folder

Drop image files in here. On push to `main`, GitHub Actions will regenerate
`manifest.json` automatically.

**Supported formats:** `.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`, `.gif`

**Tips:**
- Compress images before uploading (TinyPNG, Squoosh). Aim for under 500 KB each.
- Filenames just need to be unique — the site doesn't display them, only counts them.
- Recommended size: ~1600px on the long edge. The frame is 16:10, but other ratios are fine; the image gets cropped to fill.

## Test locally

If you want to preview before pushing, run this from the repo root:

```bash
node scripts/build-manifest.js
```

That regenerates `manifest.json` so the site picks up new images.
