const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')
const heroes = require('./heroes.json')
const heroesRoutes = require('./routes/heroes')

app.use('/heroes', heroesRoutes)


app.listen(port, () => {
    console.log('hello')
})