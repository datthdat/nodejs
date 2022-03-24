import express from 'express'
import congifViewEngine from './configs/viewEngine'
import initWebRoute from './router/web'
import initAPIRoute from './router/api'
import connectDB from './configs/connectDB'


require('dotenv').config()
const app = express()
const port = process.env.PORT || 3000

// đẩy request lên server
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

congifViewEngine(app)

initWebRoute(app)
initAPIRoute(app)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})