docker build -f Dockerfile -t ironpdftest .. `
  && docker run -it --rm -v "$(Get-Location)/data:/data" ironpdftest
