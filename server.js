import express from 'express'
import connect from './db/db.config.js'
import UserModel  from './model/user.model.js'
import 'dotenv/config'
import cors from 'cors'
const PORT = process.env.PORT || 1234

const app = express()
connect()
const corsOptions = {
  origin: process.env.FRONTEND_URL,
  methods: 'GET'
};
app.use(cors(corsOptions))

app.get('/', (req, res) => {
  return res.send('Server is working.')
})

app.get('/user', async (req, res) => {
  const query = req.query.search;
  const queryRegex = new RegExp(`^${query}`, 'i')
  const user = await UserModel.find({name: queryRegex}, {name: 1, _id: 0})
  return res.json({
    results: user
  })
})

app.listen(PORT, () => console.log(`Server is listening on port no. ${PORT}`))