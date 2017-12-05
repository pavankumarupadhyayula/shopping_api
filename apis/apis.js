'use strict';
const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    config = require('./../bin/configuration');

// port
app.set('PORT', process.env.PORT || config.defaultPort);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


app.use('/gallery', express.static('public'));

//GET Apis....
app.use('/', require('./../routes/routes'));



app.listen(app.get('PORT'), (req, res) => {
    console.log('API server is up and running on http://localhost');
});