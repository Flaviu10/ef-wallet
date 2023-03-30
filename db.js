import pg from "pg"
import dotenv from 'dotenv';
dotenv.config();



const { Pool } = pg


export const pool = new Pool({
    user: process.env.POSTGRESQL_ADDON_USER,
    host:  process.env.POSTGRESQL_ADDON_HOST,
    database:  process.env.POSTGRESQL_ADDON_DB,
    password:  process.env.POSTGRESQL_ADDON_PASSWORD,
    port:  process.env.POSTGRESQL_ADDON_PORT,
  });