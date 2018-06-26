var express = require('express');
var productRepo = require('../repo/ProductRepo');
var config = require('../config/config');
var router = express.Router();

router.get('/',(req,res) =>{
    var p1=productRepo.loadDateSort();
    var p2=productRepo.loadSeenSort();
    var p3=productRepo.loadQuantitySort();
    Promise.all([p1, p2,p3]).then(([DateS, SeenS,QuantS]) => {
        var vm = {
            dateS:DateS,
            seenS:SeenS,
            quantityS:QuantS
        }
        res.render('home/index',vm)
    });     
});

module.exports = router;