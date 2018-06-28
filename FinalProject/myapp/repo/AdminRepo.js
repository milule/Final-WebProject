var db = require('../database/db');
var config = require('../config/config');


exports.countProAll = () => {
    var sql =`select count(*) as total from products`
    return db.load(sql);
}

exports.loadAll= (offset) =>{
    var sql =`select products.*,categories.CatName from products left join categories on products.CatID=categories.CatID
     limit ${config.PRODUCTS_PER_PAGE} offset ${offset}`
    return db.load(sql);
}

exports.loadAllC = () => {
    var sql =`select products.CatID,categories.CatName,count(*) as totalC from products left
    join categories on products.CatID = categories.CatID group by products.CatID`
    return db.load(sql);
}

exports.loadAllManu = () => {
    var sql =`select Manufacturer,count(*) as totalM,sum(Price) as totalP from products group by Manufacturer`
    return db.load(sql);
}

exports.deletePro = (proid) => {
    var sql = `delete from products where ProID=${proid}`
    return db.save(sql);
}