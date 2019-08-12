const mongoose = require('mongoose')
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const config = require('./config/index')
const seederService = require('./services/seeder.service');

mongoose.connect(config.dbConnection, { useNewUrlParser: true})

app.use(bodyParser.json())

const corsConfig = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    next()
}

app.use(corsConfig);

const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

if (config.seedData) {
    seederService.seedData()
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`))