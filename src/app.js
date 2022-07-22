import express from 'express'
import tipsController from './controllers/tips-controllers.js'
import db from './database/db.js'

const app = express()
const port = 3000

app.use(express.json())

tipsController(app, db)


app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})