var categoryRepo = require('../repo/CategoryRepo');

module.exports = (req, res, next) => {
    categoryRepo.loadAll().then(rows => {
        res.locals.layoutVM = {
            categories: rows,
            suppliers: rows,
        };
        next();
    });
};