# SammyVelez.com

Phase 1 of Sammy Velez's official professional website. This responsive, single-page portfolio is built with React and Vite and uses only verified credits and profile links. Unavailable media and professional details are deliberately marked as placeholders.

## Run locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Vite prints the local development URL (normally `http://localhost:5173`).

## Validate and build

```bash
npm run lint
npm run build
npm run preview
```

The production output is written to `dist/`.

## Updating content

- Edit verified credits and social URLs in `src/content.js`.
- Replace visual placeholder elements in `src/App.jsx` with approved responsive images. Keep meaningful `alt` text on content images.
- Replace the acting reel placeholder with a YouTube privacy-enhanced embed (`https://www.youtube-nocookie.com/embed/VIDEO_ID`) after the final video URL is approved.
- Replace the About and Contact placeholder copy only when biography, résumé, direct contact, or representation details are verified.
- Add an approved Open Graph image and its absolute URL to `index.html` when photography is available.

## Deployment

This is a static Vite site configured for the GitHub Pages project URL
`https://<account>.github.io/sammyvelez.com/`. The `base` setting in
`vite.config.js` ensures generated JavaScript and CSS URLs include the required
`/sammyvelez.com/` prefix.

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Environment variables:** none

Configure the production host to serve `index.html` and connect the `sammyvelez.com` domain. HTTPS and asset compression should be enabled by the hosting provider.

### GitHub Pages

The workflow in `.github/workflows/deploy-pages.yml` builds and deploys the
`dist/` directory whenever `main` is updated. In the repository's **Settings →
Pages**, set **Source** to **GitHub Actions**. The workflow also checks the
generated HTML for the project-path asset prefix before deployment.

To inspect the same production paths locally:

```bash
npm run build
npm run preview
```

Open the preview URL with `/sammyvelez.com/` appended. If this repository later
uses a custom domain at its root, change `base` in `vite.config.js` to `/` and
update the workflow's asset-path assertion.

## Phase 2 asset checklist

See the project's handoff notes or supply approved headshots, modeling images, reel/video URLs, professional bio, résumé/verified credits, contact details, representation information (if applicable), and the confirmed Pinterest URL.
