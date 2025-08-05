// drizzle.config.js
export default {
  dialect: 'postgresql',
  schema: './src/db/schema.js',           // ← arahkan ke schema kamu
  out: './drizzle',                       // ← folder untuk file migrasi
  dbCredentials: {
    connectionString: process.env.DATABASE_URL,
  },
}