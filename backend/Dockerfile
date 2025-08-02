# Gunakan base image yang sudah memiliki Bun terpasang
FROM oven/bun:1.0

# Tetapkan working directory
WORKDIR /app

# Copy package.json dan bun.lockb (Bun's lock file)
COPY package.json bun.lockb ./

# Install dependencies menggunakan Bun
RUN bun install --frozen-lockfile

# Copy semua file ke working directory
COPY . .

# Exposure port yang digunakan oleh Hono
EXPOSE 3001

# Jalankan aplikasi Hono menggunakan Bun
# Asumsi file entry point kamu bernama `index.js`
CMD ["bun", "run", "src/index.ts"]