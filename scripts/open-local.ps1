$Repo = "C:\Users\lukec\Documents\GitHubLocal\amity-outdoor-fitness-grant"
if (-not (Test-Path $Repo)) {
  Write-Host "Repo folder not found: $Repo"
  Write-Host "Unzip or copy the folder into C:\Users\lukec\Documents\GitHubLocal first."
  exit 1
}
Set-Location $Repo
Write-Host "Starting local website at http://localhost:8080"
python -m http.server 8080
