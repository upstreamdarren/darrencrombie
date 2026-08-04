# Darren Crombie

Source for [darrencrombie.com](https://darrencrombie.com), a static personal
site about responsible AI, care and better public services.

## Development

- `npm install` installs dependencies.
- `npm run dev` starts the local development server.
- `npm run build` creates the production-ready static site in `out/`.
- `npm test` builds the site and verifies the rendered homepage and brand assets.

## Cloudflare Pages

The GitHub repository is connected to Cloudflare Pages and deploys automatically
from `main`.

- Build command: `npm run build`
- Build output directory: `out`
- Root directory: leave blank
- Node.js: 22 or later

The custom domain is `darrencrombie.com`.
