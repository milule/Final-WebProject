var db = require('../database/db');
var config = require('../config/config');

exports.loadAll = () => {
    var sql='select * from products'
    return db.load(sql);
}

exports.loadAllC = () => {
    var sql='select * from categories'
    return db.load(sql);
}

// exports.loadAllByCat = (catId) => {
//     var sql = `select * from products where CatID = ${catId}`;
//     return db.load(sql);
// }

exports.loadAllByCat = (catID, offset) => {
    var sql = `select * from products where CatID = ${catID} limit ${config.PRODUCTS_PER_PAGE} offset ${offset}`;
    return db.load(sql);
}

exports.countByCat = catID => {
	var sql = `select count(*) as total from products where CatID = ${catID}`;
    return db.load(sql);
}

exports.loadOneProduct = proName => {
	var sql =  `select * from products where ProName = '${proName}'`;
    return db.load(sql);
}

exports.loadSamePro = catID => {
    var sql = `select * from products where CatID = ${catID} limit ${config.PRODUCTS_PER_CAT}` ;
    return db.load(sql);
}

exports.loadSameManu = Manu => {
    var sql =  `select * from products where Manufacturer = '${Manu}' limit ${config.PRODUCTS_PER_CAT}`;
    return db.load(sql);
}
