//npm i hbs --save - install engine Handlebars
//npm i express-handlebars - for hbs layout

const config = require('./config')
const express = require('express')
const app = express()
const peopleRouter = require('./routes/people.routes')
const positionsRouter = require('./routes/positions.routes')
const mongoose = require('mongoose')

app.use(express.json())

//Middleware CORS
app.use((req, resp, next) => {
    resp.setHeader('Access-Control-Allow-Origin', '*');
    resp.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    next()
})

//регистрации маршрутов
app.use('/api/people', peopleRouter)
app.use('/api/positions', positionsRouter)

//подключение к БД
mongoose.connect(config.dbUri, { useNewUrlParser: true, useUnifiedTopology: true })


app.listen(3000)