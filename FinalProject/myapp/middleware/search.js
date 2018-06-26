// var express = require('express');
// var productRepo = require('../repo/ProductRepo');
// var router = express.Router();

// router = (req, res, next) => {

// 	if (req.session.isLogged === undefined) {
// 		req.session.isLogged = false;
// 	}

//     categoryRepo.loadAll().then(rows => {
//         res.locals.layoutVM = {
//             categories: rows,
//             suppliers: rows,
//             isLogged: req.session.isLogged,
//             curUser: req.session.user
//         };

//         // console.log(res.locals.layoutVM.curUser);

//         next();
//     });
// };

// module.exports = router;