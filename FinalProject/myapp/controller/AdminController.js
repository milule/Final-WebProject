var express = require('express');
var productRepo = require('../repo/ProductRepo');
var categoryRepo = require('../repo/CategoryRepo');
var adminRepo = require('../repo/AdminRepo');
var config = require('../config/config');
var decode = require('unescape');
var router = express.Router();

router.get('/dashboard', (req,res) =>{
    var page = req.query.page;
    if (!page) {
        page = 1;
    }
    var offset = (page - 1) * config.PRODUCTS_PER_PAGE;
    var p0 = adminRepo.loadAll(offset);
    var p1 = adminRepo.loadAllC();
    var p2 = adminRepo.loadAllManu();
    var p3 = adminRepo.countProAll();
    Promise.all([p0, p1, p2,p3]).then(([ProAd, CateAd, ManuAd,totalsp]) => {
            var total = totalsp[0].total;
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
        var vm ={
            proad:ProAd,
            catead:CateAd,
            manuad:ManuAd,
            page_numbers: numbers,
            num_page: parseInt(Pages),
            lastPage: +page === parseInt(Pages),
            firstPage: +page === 1
        }
        res.render('admin/index',vm);
    });
   
});


router.post('/delete', (req,res) =>{
        adminRepo.deletePro(req.body.ProID).then(value => {

            res.redirect('/dashboard');
        });;
});


module.exports = router;