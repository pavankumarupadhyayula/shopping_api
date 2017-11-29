'use strict';
const express = require('express'),
    router = express.Router(),
    watchesDatabse = require('./../database/watches'),
    mobilesDatabase = require('./../database/mobiles'),
    laptopsDatabase = require('./../database/laptops');

//REST api for watches
router.get('/watches', (req, res) => {
    res.status(200).send(watchesDatabse);
});


//REST api for mobiles
router.get('/mobiles', (req, res) => {
    res.status(200).send(mobilesDatabase);

});

//REST api for laptops
router.get('/laptops', (req, res) => {
    res.status(200).send(laptopsDatabase);

});

/*router.post('/payment', (req, res) => {
    res.status(200).send(watchesDatabse);
});*/



module.exports = router;