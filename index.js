const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
require("dotenv").config();
const cors = require('cors')
app.use(express.urlencoded({ extended: false }))


app.use(cors())
app.use(express.json())




app.get('/', (req, res) => {
    res.send('welcome to server')
})

const db = require('./server/config/db')
const seed = require('./server/config/seed')

app.use(express.static('server/public/'))

const adminRoutes = require('./server/routes/adminRoutes')
app.use('/admin', adminRoutes)

const customerRoutes = require('./server/routes/customerRoutes')
app.use('/customer', customerRoutes)


const trainerRoutes = require('./server/routes/trainerRoutes')
app.use('/trainer', trainerRoutes)


app.listen(PORT, (error) => {
    if (error) {
        console.log("error in server", error)

    }
    else {
        console.log('Server is running at port',PORT)

    }
})