var express = require('express');
var productRepo = require('../repo/ProductRepo');
var categoryRepo = require('../repo/CategoryRepo');
var config = require('../config/config');
var router = express.Router();

router.get('/result', (req, res) => {
    var name = req.query.nameSe;
    var cate = req.query.cateSe;
    var price = req.query.priceSe;
    var brand = req.query.brandSe;
    var value;
    console.log(req.query);
    if (price === 'Cao') {
        value = 200000
    }
    productRepo.findCatID(cate).then(rows => {
        if (name.length !== 0){
        productRepo.loadBySearch(name, rows[0].CatID,brand).then(ProSearch => {
            console.log(ProSearch)
            var vm = {
                prosearch: ProSearch,
                noproduct: ProSearch.length === 0,
            }
            res.render('product/searchPro',vm)
        });
    } else {
        productRepo.loadBySearchOther(rows[0].CatID,brand).then(ProSearch => {
            console.log(ProSearch)
            var vm = {
                prosearch: ProSearch,
                noproduct: ProSearch.length === 0,
            }
            res.render('product/searchPro',vm)
        });
    }
});
});

// router.post('/', (req, res) => {
//     var vm ={
//         test : req.body.nameSe
//     }
//     console.log(test)
//         res.render('product/searchPro',vm)
// });





module.exports = router;