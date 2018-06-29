var express = require('express');
var productRepo = require('../repo/ProductRepo');
var categoryRepo = require('../repo/CategoryRepo');
var adminRepo = require('../repo/AdminRepo');
var config = require('../config/config');
var decode = require('unescape');
var router = express.Router();
var moment = require('moment');

router.get('/dashboard', (req, res) => {
    var page = req.query.page;
    if (!page) {
        page = 1;
    }
    var offset = (page - 1) * config.PRODUCTS_PER_PAGE;
    var p0 = adminRepo.loadAll(offset);
    var p1 = adminRepo.loadAllC();
    var p2 = adminRepo.loadAllManu();
    var p3 = adminRepo.countProAll();
    var p4 = adminRepo.loadAllProduct();
    Promise.all([p0, p1, p2, p3, p4]).then(([ProAd, CateAd, ManuAd, totalsp, AllPro]) => {
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
        var vm = {
            allpro: AllPro,
            proad: ProAd,
            catead: CateAd,
            manuad: ManuAd,
            page_numbers: numbers,
            num_page: parseInt(Pages),
            lastPage: +page === parseInt(Pages),
            firstPage: +page === 1
        }
        res.render('admin/index', vm);
    });

});


router.post('/delete', (req, res) => {
    if (req.body.CatID ===1)
    {
        adminRepo.deletePro(req.body.CatID).then(value => {

            res.redirect('/dashboard');
        });
    }
    adminRepo.deletePro(req.body.ProID).then(value => {

        res.redirect('/dashboard');
    });
});

router.post('/add', (req, res) => {
    var dateAd = moment(req.body.date, 'YYYY-MM-DD')
        .format('DD/MM/YYYY');
    var p0 = adminRepo.findCatID(req.body.cate);
    var p1 = adminRepo.findTheSame(req.body.usr);
    Promise.all([p0, p1]).then(([catId, value]) => {
        console.log(value[0])
        if ((req.body.usr === value[0]) || (req.body.usr.length === 0)) {
            var vm = {
                error: true
            }
            res.redirect("/dashboard")
        } else {
            var newpro = {
                user: req.body.usr,
                tiny: req.body.tiny,
                full: req.body.full,
                price: req.body.pri,
                cat: catId[0].CatID,
                quan: req.body.qua,
                manu: req.body.manu,
                seen: 0,
                org: req.body.org,
                dat: dateAd

            }
            adminRepo.addPro(newpro).then(temp => {
                var vm = {
                    error: false
                }
                res.redirect("/dashboard")
            })
        }
    })
});

router.post('/edit', (req, res) => {
    var dateAd1 = moment(req.body.date1, 'YYYY-MM-DD')
        .format('DD/MM/YYYY');
        adminRepo.findCatID(req.body.cate).then(catid => {
        var editpro = {
            user: req.body.newn,
            tiny: req.body.tiny1,
            full: req.body.full1,
            price: req.body.pri1,
            cat: catid[0],
            quan: req.body.qua1,
            manu: req.body.manu1,
            seen: 0,
            org: req.body.org1,
            dat: dateAd1
        }
        if (editpro.user !=='' && editpro.user!==req.body.oldn)
        {
            adminRepo.editN(editpro.user,req.body.oldn);
            adminRepo.editS(editpro.seen,req.body.oldn);
        }
        if (editpro.tiny !=='')
        {
            adminRepo.editTiny(editpro.tiny,req.body.oldn);
        }
        if (editpro.full !=='')
        {
            adminRepo.editFull(editpro.full,req.body.oldn);
        }
        if (editpro.quan !==''){
            adminRepo.editQua(editpro.quan,req.body.oldn);
        }
        if (editpro.dat!=='Invaild date')
        {
            adminRepo.editDate(editpro.dat,req.body.oldn);
        }
        adminRepo.editCat(editpro.cat,req.body.oldn);
        adminRepo.editManu(editpro.manu,req.body.oldn);
        res.redirect("/dashboard");
    })
});


router.post('/addcat', (req, res) => {
    if (req.body.catn === '')
    {
        res.redirect("/dashboard");
    }
    else{
        console.log('asd')
        var newcat ={
            catn:req.body.catn
        }
        console.log(newcat)
        adminRepo.addCat(newcat).then(value =>{
            res.redirect("/dashboard")
        })
    }
});

module.exports = router;