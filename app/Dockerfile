FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json first
COPY package.json .

# Install dependencies
RUN npm install

# Copy app code
COPY index.js .

# Expose port
EXPOSE 3000

# Run the app
CMD ["node", "index.js"]
