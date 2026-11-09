# Jerico Bucoy – Portfolio

Static portfolio site (HTML, CSS, JavaScript). No build step.

## Structure

```
index.html
vercel.json
assets/
  css/styles.css
  js/main.js
  img/jerico.jpg            <- add your photo here
  Jerico_Bucoy_Resume.pdf   <- resume download
  favicon.svg
```

## Add your photo

Save your formal photo as `assets/img/jerico.jpg` (portrait, ~4:5 ratio, under 500 KB works best).
Until the file exists, the site shows the "JB" placeholder.

## Run locally

Open `index.html`, or serve the folder:

```
npx serve .
```

## Deploy

1. Push to GitHub.
2. In Vercel: Add New > Project, import the repo.
3. Framework Preset: Other. Leave build command and output directory empty. Deploy.

## Update the resume

Replace `assets/Jerico_Bucoy_Resume.pdf` with the new file (keep the same name).
