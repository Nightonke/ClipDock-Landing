# ClipDock Landing

Astro-based multilingual landing website for [ClipDock: Web Video Downloader](https://apps.apple.com/us/app/clipdock-web-video-downloader/id6769265797), prepared for `https://clipdock.video` and GitHub Pages.

This repository is currently a scaffold derived from the Split Screen Player landing template. Product-specific body copy, legal copy, screenshots, video, and social artwork still need to be replaced before deployment.

Read [HANDOFF.md](./HANDOFF.md) before continuing.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Reference material

- `references/app-store-metadata/`: localized App Store metadata supplied by the app owner
- `references/app-store-lookup.json`: public App Store lookup snapshot
- `references/app-store-screenshots/`: current public iPhone and iPad screenshots

## Deployment safety

The GitHub Pages workflow is manual-only while the project remains a scaffold. Restore its `push` trigger only after all inherited Split Screen Player copy and assets have been replaced and verified.

