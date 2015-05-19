var express = require('express');
var router = express.Router();
var Rants = require('../models/rants');

router.get('/', function (req, res, next){
   Rants.find({}, function(err, rants){
      if (err) return next(err);
       res.json(rants);
   });
});

router.post('/', function(req, res, next){
   Rants.create(req.body, function (err, rants){
       if(err) return next(err);
       res.json(rants);
   });
});

console.log('Rants route loaded');
module.exports = router;