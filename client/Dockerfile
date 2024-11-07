# Dockerfile for the client
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Increase npm install timeout and install dependencies
RUN npm config set fetch-timeout 600000
RUN npm config set fetch-retry-mintimeout 600000
RUN npm config set fetch-retry-maxtimeout 600000

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy application files and build the React app
COPY . .
RUN npm run build

# Stage 2: Serve the build with NGINX
FROM nginx:alpine

# Copy the build output to NGINX's default location
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port NGINX will serve on
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
