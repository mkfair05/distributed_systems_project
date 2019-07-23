# Distributed System Term Project
# CSC 462 Summer 2019

## Steps to run project
* cd react-docker-app
* docker build -t react-docker-app .
* docker run -it -p 8080:80 react-docker-app

## System Architecture:
### Single Node Architecture
* Docker compose
* ReactJS
* ArcGis API
    * Data imported to ArcGIS as SHP file
* Client-side Rendering
* Webpack

### Distributed Architecture
* Docker Swarm
* ReactJS
* ArcGis API
    * Data imported to ArcGIS as SHP file
* Client-side Rendering
* Webpack


## Ideas:
* create dockerfile to spin up docker containers for each microservice
* import and visualize data using numpy/scipy/pandas/etc.
* set up webpack
* connect api to front end
* embed map into main page


* docker image of ArcGIS API for Python  -> inside api-docker-app folder
* docker image of python webapp api      -> inside api-docker-app folder
* docker image of reactjs app?



# What I want to do
##    1 command to start everything
## run everything inside 1 or more docker containers