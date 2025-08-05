import { drizzle } from 'drizzle-orm/node-postgress';
import { pool } from 'pg';

// 1. Konfigurasi koneksi ke database PostgreSQL
const pool = new Pool ({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '12345678',
    database: 'web_smkn6malang', //otw yaw
});
//objek buat drizzle
export const db = drizzle(pool);