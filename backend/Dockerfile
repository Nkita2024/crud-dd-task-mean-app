# Use lightweight Node.js base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies first (cached layer)
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy source code
COPY . .

# Expose backend port
EXPOSE 8080

# Start server
CMD ["node", "server.js"]
