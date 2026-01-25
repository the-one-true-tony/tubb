# Database Migrations

This directory contains SQL migration scripts for the Cloudflare D1 database.

## Running Migrations

### Migration 001: Combine Name Fields

This migration adds a `name` column and migrates existing `first_name` and `last_name` data.

**For local database:**
```bash
npx wrangler d1 execute tubb-db --file=./db/migrations/001_combine_name_fields.sql
```

**For remote database:**
```bash
npx wrangler d1 execute tubb-db --remote --file=./db/migrations/001_combine_name_fields.sql
```

### Migration 002: Recreate Table with Name Field

This migration recreates the table with the new schema (single `name` field instead of `first_name`/`last_name`).

**⚠️ WARNING:** This migration will recreate the table. Make sure you have a backup!

**For local database:**
```bash
npx wrangler d1 execute tubb-db --file=./db/migrations/002_recreate_table_with_name.sql
```

**For remote database:**
```bash
npx wrangler d1 execute tubb-db --remote --file=./db/migrations/002_recreate_table_with_name.sql
```

### Migration 003: Add Birthdate and Tubulin Variant

This migration adds `birthdate` and `tubulin_variant` columns to the users table.

**For local database:**
```bash
npx wrangler d1 execute tubb-db --file=./db/migrations/003_add_birthdate_and_variant.sql
```

**For remote database:**
```bash
npx wrangler d1 execute tubb-db --remote --file=./db/migrations/003_add_birthdate_and_variant.sql
```

## Migration Order

Always run migrations in order:
1. First run `001_combine_name_fields.sql` to add the name column and migrate data
2. Then run `002_recreate_table_with_name.sql` to finalize the schema
3. Then run `003_add_birthdate_and_variant.sql` to add birthdate and tubulin_variant fields

## Backup Before Migration

**Always backup before running migrations:**

```bash
# Backup remote database
npx wrangler d1 export tubb-db --remote --output=backups/pre-migration-$(date +%Y%m%d-%H%M%S).sql

# Backup local database
npx wrangler d1 export tubb-db --output=backups/pre-migration-local-$(date +%Y%m%d-%H%M%S).sql
```

## Verifying Migration

After running migrations, verify the schema:

```bash
npx wrangler d1 execute tubb-db --remote --command="PRAGMA table_info(users);"
```

You should see `name` instead of `first_name` and `last_name`.
