'use strict';
const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    config = require('./../bin/configuration');

// port
app.set('PORT', config.defaultPort);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


app.use('/v1/gallery', express.static('public'));

//GET Apis....
app.use('/v1', require('./../routes/routes'));



app.listen(app.get('PORT'), (req, res) => {
    console.log('API server is up and running on http://localhost');
});