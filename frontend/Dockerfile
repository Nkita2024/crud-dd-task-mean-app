# Stage 1: Build Angular app
FROM node:18-alpine AS build
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy source code
COPY . .

# Build Angular app
RUN npm run build --prod

# Stage 2: Serve with Nginx
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Remove default nginx static files
RUN rm -rf ./*

# Copy Angular build output from Stage 1
COPY --from=build /app/dist/angular-15-crud .

# Expose port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
