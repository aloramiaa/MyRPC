FROM node:18-alpine

WORKDIR /app

# Install dependencies first for better layer caching
COPY package*.json ./
RUN npm ci --omit=dev || npm install --omit=dev

# Copy the rest of the app
COPY . .

ENV NODE_ENV=production

# Render provides PORT; our app listens on process.env.PORT
EXPOSE 3000

CMD ["npm", "start"]


