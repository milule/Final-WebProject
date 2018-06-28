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
exports.findCatID = catname =>{
    var sql = `select * from categories where CatName = '${catname}'`;
    return db.load(sql);
}

exports.loadAllByCat = (catID, offset) => {
    var sql = `select * from products where CatID = ${catID} limit ${config.PRODUCTS_PER_PAGE} offset ${offset}`;
    return db.load(sql);
}

exports.countByCat = catID => {
	var sql = `select count(*) as total from products where CatID = ${catID} `;
    return db.load(sql);
}

exports.loadOneProduct = proName => {
	var sql =  `select * from products where ProName = '${proName}' `;
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

exports.single = id => {
    var sql = `select * from products where ProID = ${id}`;
    return db.load(sql);
}

exports.loadDateSort = () => {
    var sql = `select * from products order by DateAdded desc limit 10`;
    return db.load(sql);
}

exports.loadSeenSort = () =>{
    var sql = `select * from products order by Seen desc limit 10`;
    return db.load(sql);
}

exports.loadQuantitySort = () =>{
    var sql = `select * from products order by Quantity desc limit 10`;
    return db.load(sql);
}

exports.loadAllByManufac = (manu,offset) => {
    var sql = `select * from products where Manufacturer = '${manu}'limit ${config.PRODUCTS_PER_PAGE} offset ${offset}`
    return db.load(sql);
}

exports.countByManufac = manu => {
    var sql = `select count(*) as total from products where Manufacturer = '${manu}'`
    return db.load(sql);
}

exports.loadManufac = () =>{
    var sql = `select distinct Manufacturer from products`
    return db.load(sql);
}

exports.loadBySearch = (name,cate,brand) => {
    var sql = `select * from products where ProName like '${name}' and CatID = ${cate} and Manufacturer= '${brand}'  `
    return db.load(sql);
}

exports.loadBySearchOther = (cate,brand) => {
    var sql = `select * from products where Manufacturer = '${brand}' and CatID = ${cate}  `
    return db.load(sql);
}

exports.updateSeen = (id,temp) => {
    var sql = `update products set Seen=${temp}+1 where ProID=${id}`
    return db.save(sql);
}
