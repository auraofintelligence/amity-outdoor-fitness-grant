# Windows setup

## 1. Put the repo somewhere easy

Example:

```powershell
mkdir "$env:USERPROFILE\Documents\GitHubLocal" -ErrorAction SilentlyContinue
```

Unzip or clone this repo inside that folder.

## 2. Open the site

From the repo folder:

```powershell
python -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## 3. Publish later

Push the repo to GitHub and enable GitHub Pages from the `main` branch and `/root`.

No install, build or package step is required.

