// src/db/schema.js
import {
  pgTable,
  serial,
  text,
  integer,
  date,
  timestamp,
  varchar,
  pgEnum,
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// 1. ENUMs
export const roleEnum = pgEnum('role', ['admin', 'teacher', 'student']);

export const statusHireEnum = pgEnum('status_hire', [
  'dikirim',
  'diproses',
  'diterima',
  'ditolak',
]);

export const bidangEnum = pgEnum('bidang', [
  'teknik',
  'desain',
  'jaringan',
  'otomatif',
  'lainnya',
]);

export const statusEnum = pgEnum('status', ['pending', 'approved', 'rejected']);

export const kategoriCVEnum = pgEnum('kategori_cv', [
  'desain',
  'programming',
  'teknik',
  'lainnya',
]);

export const kategoriBeritaEnum = pgEnum('kategori_berita', [
  'informasi',
  'prestasi',
  'event',
  'lainnya',
]);

export const kategoriEkskulEnum = pgEnum('kategori_ekskul', [
  'olahraga',
  'seni',
  'ilmiah',
  'rohani',
]);

export const statusEkskulEnum = pgEnum('status_ekskul', ['aktif', 'nonaktif']);

// 2. Tabel: user
export const users = pgTable('users', {
  users_id: varchar('user_id', { length: 255 }).notNull().primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  password: varchar('password', { length: 255 }).notNull(),
  role: roleEnum('role').default('student'),
  created_at: timestamp('created_at').defaultNow(),
});

// 3. Tabel: industri_Auth
export const industri_Auth = pgTable(
  'industri_Auth',
  {
    industri_id: varchar('industri_id', { length: 255 }).notNull().primaryKey(),
    user_id: varchar('user_id', { length: 255 }).notNull(),
    nama_industri: varchar('nama_industri', { length: 255 }).notNull(),
    email_industri: varchar('email_industri', { length: 255 }).notNull(),
    nama_pengirim: varchar('nama_pengirim', { length: 255 }).notNull(),
    bidang: bidangEnum('bidang').notNull(),
    create_at: timestamp('create_at').defaultNow(),
  },
  (table) => ({
    userRef: {
      foreignKey: () => ({
        columns: [table.user_id],
        foreignColumns: [user.user_id],
      }),
    },
  })
);

// 4. Tabel: cvSiswa
export const cvSiswa = pgTable(
  'cv_siswa',
  {
    porto_id: integer('porto_id').notNull().primaryKey(),
    user_id: varchar('user_id', { length: 255 }).notNull(),
    file_path: text('file_path').notNull(),
    file_size: varchar('file_size', { length: 255 }).notNull(),
    status: statusEnum('status').notNull(),
    kategori: kategoriCVEnum('kategori').notNull(),
    create_at: timestamp('create_at').defaultNow(),
  },
  (table) => ({
    userRef: {
      foreignKey: () => ({
        columns: [table.user_id],
        foreignColumns: [user.user_id],
      }),
    },
  })
);

// 5. Tabel: catatanHire
export const catatanHire = pgTable(
  'catatan_hire',
  {
    hire_id: varchar('hire_id', { length: 255 }).notNull().primaryKey(),
    user_id: varchar('user_id', { length: 255 }).notNull(),
    porto_id: integer('porto_id').notNull(),
    industri_id: varchar('industri_id', { length: 255 }).notNull(),
    status: statusHireEnum('status').notNull(),
    create_at: timestamp('create_at').defaultNow(),
  },
  (table) => ({
    userRef: {
      foreignKey: () => ({
        columns: [table.user_id],
        foreignColumns: [user.user_id],
      }),
    },
    portoRef: {
      foreignKey: () => ({
        columns: [table.porto_id],
        foreignColumns: [cvSiswa.porto_id],
      }),
    },
    industriRef: {
      foreignKey: () => ({
        columns: [table.industri_id],
        foreignColumns: [industri_Auth.industri_id],
      }),
    },
  })
);

// 6. Tabel: berita
export const berita = pgTable(
  'berita',
  {
    berita_id: varchar('berita_id', { length: 255 }).notNull().primaryKey(),
    judul: varchar('judul', { length: 255 }).notNull(),
    isi: text('isi').notNull(),
    image: varchar('image', { length: 255 }).notNull(),
    user_id: varchar('user_id', { length: 255 }).notNull(),
    kategori: kategoriBeritaEnum('kategori').notNull(),
    create_at: timestamp('create_at').defaultNow(),
  },
  (table) => ({
    userRef: {
      foreignKey: () => ({
        columns: [table.user_id],
        foreignColumns: [user.user_id],
      }),
    },
  })
);

// 7. Tabel: ekskul
export const ekskul = pgTable('ekskul', {
  ekskul_id: varchar('ekskul_id', { length: 255 }).notNull().primaryKey(),
  nama_ekskul: varchar('nama_ekskul', { length: 255 }).notNull(),
  isi: text('isi').notNull(),
  kategori: kategoriEkskulEnum('kategori').notNull(),
  status: statusEkskulEnum('status').notNull(),
  create_at: timestamp('create_at').defaultNow(),
}); 