'use strict';
const express = require('express');
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/505');
const logger = require('./middleware/logger');
// const colthesRoutes = require('./routes/clothes');
const foodRoutes = require('./routes/food');

const app = express();
app.use(express.json()); 

app.use(logger);
// app.use(clothesRoutes);
app.use(foodRoutes);

function start(port) {
    app.listen(port, ()=> console.log(`Running on Port ${port}`))
}

app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
    app: app,
    start: start
}