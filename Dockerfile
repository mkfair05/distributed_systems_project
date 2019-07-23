
# base image
FROM node:12.2.0-alpine as build-deps

# # set working directory
WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY . ./

RUN yarn start

# # add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# # install and cache app dependencies
# COPY package.json /app/package.json
# RUN npm install
# RUN npm install react-scripts@3.0.1 -g --silent

# # start app
# CMD ["npm", "start"]

# # Use an official Python runtime as a parent image
# FROM python:3.7-slim

# # Set the working directory to /app
# WORKDIR /app

# # Copy the current directory contents into the container at /app
# COPY . /app

# # Install any needed packages specified in requirements.txt
# RUN pip install --trusted-host pypi.python.org -r requirements.txt

# # Make port 80 available to the world outside this container
# EXPOSE 80

# # Define environment variable
# ENV NAME World

# # Run app.py when the container launches
# CMD ["python", "app.py"]