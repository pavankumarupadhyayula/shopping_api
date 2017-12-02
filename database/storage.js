'use strict';
const store = require('store');


module.exports = (object, cb) => {



    store.set('database', object);
    cb(null, store.get('database'));



}