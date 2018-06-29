var categoryRepo = require('../repo/CategoryRepo'),
    cartRepo = require('../repo/cartRepo');
module.exports = (req, res, next) => {

	if (req.session.isLogged === undefined) {
		req.session.isLogged = false;
	}

    categoryRepo.loadAll().then(rows => {
        res.locals.layoutVM = {
            categories: rows,
            suppliers: rows,
            isLogged: req.session.isLogged,
            curUser: req.session.user,
            cartSummary: cartRepo.getNumberOfItems(req.session.cart),
        };

        next();
    });
};