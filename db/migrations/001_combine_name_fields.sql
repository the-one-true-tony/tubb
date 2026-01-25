-- Migration: Combine first_name and last_name into single name field
-- Date: 2026-01-24
-- Description: Merges first_name and last_name columns into a single name column

-- Step 1: Add the new name column
ALTER TABLE users ADD COLUMN name TEXT;

-- Step 2: Migrate existing data (combine first_name and last_name)
UPDATE users 
SET name = TRIM(first_name || ' ' || last_name)
WHERE first_name IS NOT NULL OR last_name IS NOT NULL;

-- Step 3: Make name NOT NULL (after data migration)
-- Note: SQLite doesn't support ALTER COLUMN, so we'll handle this in the new schema

-- Step 4: Drop the old columns
-- Note: SQLite doesn't support DROP COLUMN directly, so we'll recreate the table
-- This is handled in the new schema.sql
