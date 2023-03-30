import pg from "pg"
import dotenv from 'dotenv';
dotenv.config();



const { Pool } = pg


export const pool = new Pool({
    user: process.env.USER,
    host:  process.env.HOST,
    database:  process.env.DATABASE,
    password:  process.env.PASSWORD,
    port:  process.env.PORT,
  });