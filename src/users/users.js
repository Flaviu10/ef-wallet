import express from "express"
import { pool } from "../../db.js";
import { CreateUsers } from "./queries.js";

const router = express.Router()

router.post('/', async (req, res) => {
    const { address, txhash, amount, numbers } = req.body;
    const values = [address, txhash, amount, numbers];

    pool.query(CreateUsers, values, (error, result) => {
      if (error) throw error;
      return result.status(201).json({ message: "User created" });
  })
})

export default router