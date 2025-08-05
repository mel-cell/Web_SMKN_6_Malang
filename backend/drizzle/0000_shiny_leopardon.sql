CREATE TYPE "public"."bidang" AS ENUM('teknik', 'desain', 'jaringan', 'otomatif', 'lainnya');--> statement-breakpoint
CREATE TYPE "public"."kategori_berita" AS ENUM('informasi', 'prestasi', 'event', 'lainnya');--> statement-breakpoint
CREATE TYPE "public"."kategori_cv" AS ENUM('desain', 'programming', 'teknik', 'lainnya');--> statement-breakpoint
CREATE TYPE "public"."kategori_ekskul" AS ENUM('olahraga', 'seni', 'ilmiah', 'rohani');--> statement-breakpoint
CREATE TYPE "public"."role" AS ENUM('admin', 'teacher', 'student');--> statement-breakpoint
CREATE TYPE "public"."status_ekskul" AS ENUM('aktif', 'nonaktif');--> statement-breakpoint
CREATE TYPE "public"."status" AS ENUM('pending', 'approved', 'rejected');--> statement-breakpoint
CREATE TYPE "public"."status_hire" AS ENUM('dikirim', 'diproses', 'diterima', 'ditolak');--> statement-breakpoint
CREATE TABLE "berita" (
	"berita_id" varchar(255) PRIMARY KEY NOT NULL,
	"judul" varchar(255) NOT NULL,
	"isi" text NOT NULL,
	"image" varchar(255) NOT NULL,
	"user_id" varchar(255) NOT NULL,
	"kategori" "kategori_berita" NOT NULL,	
	"create_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "catatan_hire" (
	"hire_id" varchar(255) PRIMARY KEY NOT NULL,
	"user_id" varchar(255) NOT NULL,
	"porto_id" integer NOT NULL,
	"industri_id" varchar(255) NOT NULL,
	"status" "status_hire" NOT NULL,
	"create_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "cv_siswa" (
	"porto_id" integer PRIMARY KEY NOT NULL,
	"user_id" varchar(255) NOT NULL,
	"file_path" text NOT NULL,
	"file_size" varchar(255) NOT NULL,
	"status" "status" NOT NULL,
	"kategori" "kategori_cv" NOT NULL,
	"create_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "ekskul" (
	"ekskul_id" varchar(255) PRIMARY KEY NOT NULL,
	"nama_ekskul" varchar(255) NOT NULL,
	"isi" text NOT NULL,
	"kategori" "kategori_ekskul" NOT NULL,
	"status" "status_ekskul" NOT NULL,
	"create_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "industri_Auth" (
	"industri_id" varchar(255) PRIMARY KEY NOT NULL,
	"user_id" varchar(255) NOT NULL,
	"nama_industri" varchar(255) NOT NULL,
	"email_industri" varchar(255) NOT NULL,
	"nama_pengirim" varchar(255) NOT NULL,
	"bidang" "bidang" NOT NULL,
	"create_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "user" (
	"user_id" varchar(255) PRIMARY KEY NOT NULL,
	"email" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	"role" "role" DEFAULT 'student',
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
