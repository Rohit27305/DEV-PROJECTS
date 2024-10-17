# Use an official Node.js image as the base image
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

RUN npm install autoprefixer --save-dev

# Copy the rest of the application files
COPY . .

RUN npm run build
# Expose the port Vite will run on
EXPOSE 5173

# Run the Vite development server
CMD ["npm", "run", "dev", "--", "--host" ]
