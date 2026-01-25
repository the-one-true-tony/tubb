-- Migration: Add birthdate and tubulin_variant fields
-- Date: 2026-01-24
-- Description: Adds birthdate and tubulin_variant columns to users table

-- Add birthdate column
ALTER TABLE users ADD COLUMN birthdate TEXT;

-- Add tubulin_variant column
ALTER TABLE users ADD COLUMN tubulin_variant TEXT;
