# Multi-stage build for production
# Stage 1: Builder
FROM node:20-alpine AS builder

WORKDIR /app

# Enable corepack and prepare pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy application source
COPY . .

# Build the Vite application
RUN npx vite build

# Stage 2: Production
FROM node:20-alpine AS production

WORKDIR /app

# Enable corepack and prepare pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install production dependencies only
RUN pnpm install --frozen-lockfile --prod

# Copy built application and server from builder
COPY --from=builder /app/dist ./dist
COPY server.js ./

## Create non-root user
#RUN addgroup -g 1001 -S nodejs && \
#  adduser -S nodejs -u 1001 && \
#  chown -R nodejs:nodejs /app

# Switch to non-root user
#USER nodejs

# Expose port
EXPOSE 3000

# Set environment to production
ENV NODE_ENV=production

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Start application
CMD ["node", "server.js"]
