# Setup on your Windows path

Use this location:

```powershell
C:\Users\lukec\Documents\GitHubLocal\amity-outdoor-fitness-grant
```

## Option 1 — unzip by PowerShell

Assuming the zip is in Downloads:

```powershell
mkdir "C:\Users\lukec\Documents\GitHubLocal" -ErrorAction SilentlyContinue
Expand-Archive -Path "$env:USERPROFILE\Downloads\amity-outdoor-fitness-grant.zip" -DestinationPath "C:\Users\lukec\Documents\GitHubLocal" -Force
cd "C:\Users\lukec\Documents\GitHubLocal\amity-outdoor-fitness-grant"
python -m http.server 8080
```

Open:

```text
http://localhost:8080
```

## Option 2 — direct file open

Double-click:

```text
C:\Users\lukec\Documents\GitHubLocal\amity-outdoor-fitness-grant\index.html
```

The interactive site should still run because the data is embedded in `assets/app.js`.

## GitHub Pages

```powershell
cd "C:\Users\lukec\Documents\GitHubLocal\amity-outdoor-fitness-grant"
git init
git add .
git commit -m "Initial Amity outdoor fitness grant website"
```

Then create a GitHub repo and push it. In GitHub Pages settings, publish from `main` branch and `/root`.
