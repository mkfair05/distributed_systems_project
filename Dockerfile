FROM ubuntu:latest
COPY * ./
# COPY wrapper-script.sh wrapper-script.sh
CMD ./wrapper-script.sh