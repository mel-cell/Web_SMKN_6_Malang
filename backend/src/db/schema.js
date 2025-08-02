import { varchar } from 'drizzle-orm/mysql-core';
import { pgTable, serial, text, integer, date, boolean } from 'drizzle-orm/pg-core';

// 1.table user
export const user = pgTable('user', {
  user_id: varchar('user_id', { length: 255 }).notNull().primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  password: varchar('password', { length: 255 }).notNull(),
  role: Enumerator('role', {
    values: ['admin', 'teacher', 'student'],
    default: 'student',
  }),
  created_at: date('created_at').defaultNow(),
});

// 2. table industri Auth

