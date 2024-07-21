import express from 'express'
import cookieParser from 'cookie-parser'
import db from './models/index.js'
import User from './routes/user.js'

const app = express()
db.sequelize.sync().then(() => {
    console.log("연결 성공")
})

app.use(express.json())
app.use(cookieParser())
app.use("/user", User)

app.listen(3030, () => {
    console.log("start server port: 3030")
})
