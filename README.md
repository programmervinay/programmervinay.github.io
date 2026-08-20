# Vinay Prajapati — Market Research & Data Portfolio

This repository contains a static GitHub Pages version of the portfolio. It uses plain HTML, CSS and JavaScript, so there is no build command and no paid hosting requirement.

## Publish on GitHub Pages

1. Create a new public GitHub repository, for example `vinay-trader-portfolio`.
2. Upload every file and folder from this project to the repository root. Keep `.github/workflows/deploy-pages.yml` in the same location.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Open the **Actions** tab and wait for “Deploy portfolio to GitHub Pages” to finish.
6. Your site will be available at `https://YOUR-USERNAME.github.io/vinay-trader-portfolio/`.

Because all asset URLs are relative, the site works both in a project repository and at a custom domain.

## Before public launch

In `index.html`, replace `contact@example.com` with your real email address. Do not publish the temporary address as your contact method.

## Local preview

Double-click `index.html`, or run a simple local web server from the project folder:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.
