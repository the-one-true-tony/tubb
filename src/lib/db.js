// SQL Server database connection utility
import sql from 'mssql';

let pool = null;

const config = {
  server: process.env.DB_SERVER || 'localhost',
  database: process.env.DB_NAME || 'tubb',
  user: process.env.DB_USER || 'sa',
  password: process.env.DB_PASSWORD || '',
  options: {
    encrypt: process.env.DB_ENCRYPT === 'true', // Use true for Azure SQL
    trustServerCertificate: process.env.DB_TRUST_CERT === 'true', // Use true for local dev
    enableArithAbort: true,
  },
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
};

/**
 * Get or create database connection pool
 * @returns {Promise<sql.ConnectionPool>}
 */
export async function getDb() {
  if (pool) {
    return pool;
  }

  try {
    pool = await sql.connect(config);
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
