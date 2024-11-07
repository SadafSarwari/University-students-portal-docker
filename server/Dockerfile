# Dockerfile for the server
FROM node:16-alpine

# Install Netcat for use with wait-for-it.sh
RUN apk add --no-cache netcat-openbsd

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy application files
COPY . .

# Copy wait-for-it.sh script and make it executable
COPY wait-for-it.sh /usr/local/bin/wait-for-it.sh
RUN chmod +x /usr/local/bin/wait-for-it.sh

# Expose the server port (adjust if your server uses a different port)
EXPOSE 5000

# Command to wait for database and start the server
CMD ["./wait-for-it.sh", "postgres:5432", "--", "npm", "start"]
