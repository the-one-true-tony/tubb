// SQL Server database connection utility
// NOTE: This file is not currently used in the Cloudflare deployment.
// If you need to use SQL Server with Cloudflare, you'll need to refactor this
// to accept an `env` parameter from getCloudflareContext() instead of using process.env.
import sql from 'mssql';

let pool = null;

// Helper to get config from env object (for Cloudflare) or process.env (for local dev)
function getConfig(env = {}) {
  return {
    server: env.DB_SERVER || process.env.DB_SERVER || 'localhost',
    database: env.DB_NAME || process.env.DB_NAME || 'tubb',
    user: env.DB_USER || process.env.DB_USER || 'sa',
    password: env.DB_PASSWORD || process.env.DB_PASSWORD || '',
    options: {
      encrypt: (env.DB_ENCRYPT || process.env.DB_ENCRYPT) === 'true', // Use true for Azure SQL
      trustServerCertificate: (env.DB_TRUST_CERT || process.env.DB_TRUST_CERT) === 'true', // Use true for local dev
      enableArithAbort: true,
    },
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000,
    },
  };
}

const config = getConfig();

/**
 * Get or create database connection pool
 * @returns {Promise<sql.ConnectionPool>}
 */
export async function getDb(env = null) {
  if (pool) {
    return pool;
  }

  try {
    // Use provided env or fallback to module-level config
    const dbConfig = env ? getConfig(env) : config;
    pool = await sql.connect(dbConfig);
    console.log('Connected to SQL Server');
    return pool;
  } catch (error) {
    console.error('Database connection error:', error);
    throw error;
  }
}

/**
 * Execute a query
 * @param {string} query - SQL query string
 * @param {object} params - Query parameters (optional)
 * @returns {Promise<sql.IResult<any>>}
 */
export async function query(queryString, params = {}) {
  const pool = await getDb();
  const request = pool.request();

  // Add parameters if provided
  Object.keys(params).forEach((key) => {
    request.input(key, params[key]);
  });

  return await request.query(queryString);
}

/**
 * Execute a stored procedure
 * @param {string} procedureName - Name of stored procedure
 * @param {object} params - Procedure parameters (optional)
 * @returns {Promise<sql.IResult<any>>}
 */
export async function executeProcedure(procedureName, params = {}) {
  const pool = await getDb();
  const request = pool.request();

  // Add parameters if provided
  Object.keys(params).forEach((key) => {
    request.input(key, params[key]);
  });

  return await request.execute(procedureName);
}

/**
 * Close database connection pool
 */
export async function closeDb() {
  if (pool) {
    await pool.close();
    pool = null;
    console.log('Database connection closed');
  }
}

// Handle graceful shutdown
if (typeof process !== 'undefined') {
  process.on('SIGINT', async () => {
    await closeDb();
    process.exit(0);
  });
}
