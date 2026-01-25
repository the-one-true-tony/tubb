-- SQLite schema for local development
-- Single table: users

CREATE TABLE IF NOT EXISTS users (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  name          TEXT NOT NULL,
  email         TEXT NOT NULL UNIQUE,
  address       TEXT NOT NULL,

  -- Geocode: store address coordinates as latitude/longitude
  latitude      REAL,   -- NULL until you geocode
  longitude     REAL,

  -- Medical information
  birthdate     TEXT,   -- Date of birth (YYYY-MM-DD format)
  tubulin_variant TEXT, -- Tubulin variant (e.g., TUBA1A, TUBB2B, TUBB3)

  -- Flags: 0 = false, 1 = true
  emailable     INTEGER NOT NULL DEFAULT 0,
  researchable  INTEGER NOT NULL DEFAULT 0,
  contactable   INTEGER NOT NULL DEFAULT 0,

  created_at    TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at    TEXT
);

