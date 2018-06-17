var express = require('express');
var productRepo = require('../repo/ProductRepo');
var config = require('../config/config');

var router = express.Router();

// router.get('/',(req,res) => {
//     var p1 = productRepo.loadAll();
//     var p2 = productRepo.loadAllC();
//     Promise.all([p1, p2]).then(([pRows, countRows]) => {
//         var vm ={
//             product: pRows,
//             categories: countRows
//         };
//         res.render('category/index', vm)
//     })

// })

//--------------------------------------------------

router.get('/byCat/:catID', (req, res) => {
    var catID = req.params.catID;

    var page = req.query.page;
    if (!page) {
        page = 1;
    }

    var offset = (page - 1) * config.PRODUCTS_PER_PAGE;

    var p1 = productRepo.loadAllByCat(catID, offset);
    var p2 = productRepo.countByCat(catID);
    var p3 = productRepo.loadAllC();
    Promise.all([p1, p2,p3]).then(([ProdRows, CountRows, rows]) => {
        // console.log(pRows);
        // console.log(countRows);

        var total = CountRows[0].total;
        var Pages = total / config.PRODUCTS_PER_PAGE;
        if (total % config.PRODUCTS_PER_PAGE > 0) {
            Pages++;
        }

        var numbers = [];
        for (i = 1; i <= Pages; i++) {
            numbers.push({
                value: i,
                isCurPage: i === +page
            });
        }

        var vm = {
            products: ProdRows,
            noProducts: ProdRows.length === 0,
            page_numbers: numbers,
            categories: rows 
        };
        res.render('product/byCat', vm);
    });
});



module.exports = router;