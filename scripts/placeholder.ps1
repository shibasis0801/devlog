Write-Host tech cooking tours about | ForEach-Object { mkdir $_; Set-Location $_; New-Item -ItemType file "$_.js" ; Set-Location .. }
Write-Host tech cooking tours about | ForEach-Object { mkdir $_; Set-Location $_; New-Item -type file "$_.css"; Set-Location .. }
