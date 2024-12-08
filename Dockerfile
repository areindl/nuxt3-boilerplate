# Use a lightweight Node.js image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci && npm cache clean --force

# Build the application
RUN npm run build

# Copy application code
COPY . .


# expose the host and port 3000 to the server
ENV HOST 0.0.0.0
EXPOSE 3000

# Default command to run the Nuxt application
CMD [ "npm", "run", "start" ]