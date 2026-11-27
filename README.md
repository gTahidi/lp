# Ujao Tech landing page

The Astro site in `site/` serves [ujaotech.com](https://ujaotech.com) and [www.ujaotech.com](https://www.ujaotech.com). The older site in `landing/` is not deployed.

## Local development

Use Node.js 24:

```sh
cd site
npm ci
npm run dev
```

## Deployment

The Cloudflare Workers workflow builds pull requests and pushes to `main`. To enable deployment on push, first configure `CLOUDFLARE_API_TOKEN` as a GitHub Actions repository secret, then set `CLOUDFLARE_ACCOUNT_ID` as a repository variable. Scope the token to the Worker’s account and the site's zone. Once configured, deployments can also be started manually from `main`.

For a manual deploy, authenticate `cf` with `cf auth login`, then run:

```sh
cd site
npm ci
npm run build
npm exec --yes --package=cf@1.0.0-rc.6 -- cf deploy ./dist
```
