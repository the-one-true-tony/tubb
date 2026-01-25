-- Migration: Recreate table with name field instead of first_name/last_name
-- Date: 2026-01-24
-- Description: Recreates the users table with the new schema

-- Step 1: Create new table with updated schema
CREATE TABLE IF NOT EXISTS users_new (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  name          TEXT NOT NULL,
  email         TEXT NOT NULL UNIQUE,
  address       TEXT NOT NULL,
  latitude      REAL,
  longitude     REAL,
  emailable     INTEGER NOT NULL DEFAULT 0,
  researchable  INTEGER NOT NULL DEFAULT 0,
  contactable   INTEGER NOT NULL DEFAULT 0,
  created_at    TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at    TEXT
);

-- Step 2: Copy data from old table to new table
INSERT INTO users_new (
  id, name, email, address, latitude, longitude,
  emailable, researchable, contactable, created_at, updated_at
)
SELECT 
  id,
  COALESCE(name, TRIM(COALESCE(first_name, '') || ' ' || COALESCE(last_name, ''))) as name,
  email,
  address,
  latitude,
  longitude,
  emailable,
  researchable,
  contactable,
  created_at,
  updated_at
FROM users;

-- Step 3: Drop old table
DROP TABLE users;

-- Step 4: Rename new table to original name
ALTER TABLE users_new RENAME TO users;
