'use strict';
const express = require('express'),
    router = express.Router(),
    store = require('store'),
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

//REST api for 
router.post('/prepayment', (req, res) => {

    console.log(req.body);
    store.set(req.body.clientId, req.body);
    res.send(req.body.clientId);


});

//REST api for laptops
router.get('/laptops', (req, res) => {
    res.status(200).send(laptopsDatabase);
});

router.get('/product/price/:productType/:productName', (req, res, next) => {

    if (req.params.productType && req.params.productName) {
        let type;
        switch (req.params.productType) {
            case 'watches':
                type = watchesDatabse;
                break;
            case 'mobiles':
                type = mobilesDatabase;
                break;
            case 'laptops':
                type = laptopsDatabase;
                break;
        }

        fetchdata(type, req.params.productName, function(err, response) {
            res.status(200).json(response);
            next();
        });

    }
});



let fetchdata = function(object, productName, cb) {
    let fetchObject;

    object.forEach((value, index) => {
        if (value.ProductName == productName) {
            fetchObject = value.ProductPrice;
        }
    });

    if (fetchObject == undefined) {
        cb(null, "Item do not exist in db");
    } else {
        cb(null, fetchObject);
    }

}






module.exports = router;