import pg from "pg"

const { Pool } = pg


export const pool = new Pool({
    username: 'postgres',
    host: 'database-1.c8qzmiytoohb.us-east-1.rds.amazonaws.com',
    database: 'database-1',
    password: 'Jabbawockeez8',
    port: 5432,
  });