docker build -f Dockerfile -t ironpdftest .. && docker run -it --rm -v "$(pwd)/data:/data" \
  ironpdftest
