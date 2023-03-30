import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import Users from "./src/users/users.js"
import User from "./src/users/users.js"

const app = express()

app.use(express.json())
const PORT = 5600

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const allowedOrigins = ['https://ef-wallet.com'];

const corsOptions = {
  origin: 'https://ef-wallet.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const checkOrigin = (req, res, next) => {
    const requestOrigin = req.headers.origin;
  
    if (allowedOrigins.includes(requestOrigin)) {
      res.setHeader('Access-Control-Allow-Origin', requestOrigin);
      next();
    } else {
      res.status(403).json({ message: 'Forbidden' });
    }
  };

    app.get('*', checkOrigin);
    app.post('*', checkOrigin);

app.use(cors(corsOptions));
app.use('/users', Users)
app.use('/user', User)
app.listen(PORT, () => console.log(`Server is running on ${PORT}`))