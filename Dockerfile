FROM node:18.17.0 AS builder

# Create build directory
WORKDIR /build

COPY . ./

# Install build dependencies
RUN npm install
RUN npm run build

FROM node:18.17.0-alpine
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /build/.next ./.next
COPY --from=builder /build/public ./public
COPY --from=builder /build/next.config.js ./
COPY --from=builder /build/package.json ./package.json
COPY --from=builder /build/node_modules ./node_modules

USER nextjs

EXPOSE 3000

CMD ["npm", "start"]
