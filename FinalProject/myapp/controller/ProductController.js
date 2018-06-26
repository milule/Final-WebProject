var express = require('express');
var productRepo = require('../repo/ProductRepo');
var config = require('../config/config');
var decode = require('unescape');
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

router.get('/category/:catName', (req, res) => {
    var catName = req.params.catName;
    var page = req.query.page;
    if (!page) {
        page = 1;
    }
    var offset = (page - 1) * config.PRODUCTS_PER_PAGE;
    productRepo.findCatID(catName).then(ID => {
        var p1 = productRepo.loadAllByCat(ID[0].CatID, offset);
        var p2 = productRepo.countByCat(ID[0].CatID);
        var p3 = productRepo.loadAllC();
        Promise.all([p1, p2, p3]).then(([ProdRows, CountRows, rows]) => {
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
                    isCurPage: i === +page,
                });
            }
            console.log(numbers)
            var vm = {
                products: ProdRows,
                noProducts: ProdRows.length === 0,
                page_numbers: numbers,
                categories: rows,
                categoryName: ID[0].CatName,
                num_page: parseInt(Pages),
                lastPage: +page === parseInt(Pages),
                firstPage: +page === 1
            };
            res.render('product/byCat', vm);
        });
    });

});

router.get('/manufac/:manufact', (req, res) => {
    var manufact = req.params.manufact;
    var page = req.query.page;
    if (!page) {
        page = 1;
    }
    var offset = (page - 1) * config.PRODUCTS_PER_PAGE;
    var p1 = productRepo.loadAllByManufac(manufact, offset);
    var p2 = productRepo.countByManufac(manufact);
    var p3 = productRepo.loadManufac();
    Promise.all([p1, p2, p3]).then(([ProdRows, CountRows, rows]) => {
        // console.log(rows);
        // console.log(CountRows);
        
        var total = CountRows[0].total;
        console.log(numbers)
        var Pages = total / config.PRODUCTS_PER_PAGE;
        if (total % config.PRODUCTS_PER_PAGE > 0) {
            Pages++;
        }
        var numbers = [];
        for (i = 1; i <= Pages; i++) {
            numbers.push({
                value: i,
                isCurPage: i === +page,
            });
        }
        console.log(numbers)
        var vm = {
            products: ProdRows,
            noProducts: ProdRows.length === 0,
            page_numbers: numbers,
            manuf: rows,
            Manufac: manufact,
            num_page: parseInt(Pages),
            lastPage: +page === parseInt(Pages),
            firstPage: +page === 1
        };
        res.render('product/byManuf', vm);
    });
});

router.get('/:catId/:proName', (req, res) => {
    var proName = req.params.proName;
    productRepo.loadOneProduct(proName).then(rows => {
        var proManu = rows[0].Manufacturer;
        console.log(proManu);
        var p1 = productRepo.loadSamePro(rows[0].CatID);
        var p2 = productRepo.loadSameManu(proManu);
        Promise.all([p1, p2]).then(([SamePro, ManuPro]) => {
            //console.log(ManuPro);
            var vm = {
                product: rows[0],
                rowspro: SamePro,
                rowspromn: ManuPro,
                noProSame: SamePro.length === 0,
                noProManu: ManuPro.length === 0
            };
            res.render('product/proDetail', vm);
        });
    });
});



module.exports = router;