import express from "express"
import { pool } from "../../db.js";
import { CreateUsers } from "./queries.js";

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    return res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error getting users: ', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});


router.post('/', async (req, res) => {
  const { accounts, txhash, amount, numbers, email } = req.body;
  const values = [ accounts, txhash, amount, numbers, email];


  try {
     await pool.query(CreateUsers, values);
    return res.status(201).json({ message: 'User created' });
  } catch (error) {
    console.error('Error creating user: ', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

export default router