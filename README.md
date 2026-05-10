# Amity Point Outdoor Fitness & Wellbeing Circuit

A plain-English grant package and modern static website for a proposed salt-resistant outdoor public fitness and mind-body circuit at **Amity Point Recreation Reserve, Claytons Road, Amity, Minjerribah / North Stradbroke Island**.

This repo is designed to sit under:

```powershell
C:\Users\lukec\Documents\GitHubLocal\amity-outdoor-fitness-grant
```

## What is inside

- `index.html` — a modern one-page GitHub Pages website with interactive budget tiers, statistics, equipment cards, grant pathways and an impact calculator.
- `assets/` — CSS and JavaScript. No external libraries are required.
- `data/` — JSON copies of the budget, equipment, grants and evidence data used in the website.
- `docs/` — plain-English grant material, equipment research, site checklist, consultation plan and source notes.
- `scripts/open-local.ps1` — quick helper to open the site locally on Windows.

## Run locally on Windows

Copy or unzip this folder into:

```powershell
C:\Users\lukec\Documents\GitHubLocal
```

Then run:

```powershell
cd "C:\Users\lukec\Documents\GitHubLocal\amity-outdoor-fitness-grant"
python -m http.server 8080
```

Open:

```text
http://localhost:8080
```

If Python is not installed, you can still open `index.html` directly in a browser. The site has local fallback data, so it should still work.

## Publish to GitHub Pages

```powershell
cd "C:\Users\lukec\Documents\GitHubLocal\amity-outdoor-fitness-grant"
git init
git add .
git commit -m "Initial Amity outdoor fitness grant website"
# Create a GitHub repo, then add the remote shown by GitHub:
git remote add origin https://github.com/YOUR-USERNAME/amity-outdoor-fitness-grant.git
git branch -M main
git push -u origin main
```

In GitHub, go to **Settings → Pages → Deploy from branch → main → /root**.

## Grant-ready project summary

**Project name:** Amity Point Outdoor Fitness & Wellbeing Circuit  
**Plain purpose:** Build a free, safe and low-maintenance outdoor exercise and wellbeing space so locals and visitors can move, stretch, strengthen and connect without needing a gym membership.  
**Core idea:** A coastal-grade calisthenics and mobility circuit with shade, seating, simple signage, QR workouts, a small mind-body area and accessible paths.  
**Best first funding target:** a practical “happy medium” build around **$150,000**, with a smaller pilot and larger stretch options ready if the right grant opens.

## Important next steps before applying

1. Confirm the exact land parcel, owner/manager, services, tree protection, coastal constraints and approvals with Redland City Council.
2. Seek early advice and respectful engagement with Quandamooka representatives and relevant Council officers before proposing any cultural, interpretive or public art elements.
3. Ask suppliers for written coastal durability specifications: marine-grade or hot-dip galvanised materials, tamper-resistant 316 stainless fasteners, high-UV coatings, spare parts availability and maintenance schedule.
4. Get at least two or three quotes, including freight to Minjerribah, installation, surfacing, shade, signage and maintenance.
5. Keep the first grant application plain and practical: free access, salt-resistant equipment, social connection, physical activity, accessible design and community benefit.

## Licence

This package is provided as a draft grant and website starter. Check all grant rules, costs, approvals and legal requirements before submitting.
