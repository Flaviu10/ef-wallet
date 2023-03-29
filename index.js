import express from "express"
import bodyParser from "body-parser"
import Users from "./src/users/users.js"

const app = express()

app.use(express.json())
const PORT = 5600

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




app.use('/users', Users)
app.listen(PORT, () => console.log(`Server is running on ${PORT}`))