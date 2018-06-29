var db = require('../database/db');
var config = require('../config/config');


exports.countProAll = () => {
    var sql =`select count(*) as total from products`
    return db.load(sql);
}

exports.loadAllProduct = () => {
    var sql =`select * from products`
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

exports.findCatID = catname => {
    var sql = `select CatID from categories where CatName = '${catname}'`
    return db.load(sql);
}

exports.findTheSame = name => {
    var sql = `select ProName from products where ProName = '${name}'`
    return db.load(sql);
}

exports.addPro = newpro =>{
    var sql = `insert into products(ProName,TinyDes,FullDes,Price,CatID,Quantity,Manufacturer,Seen,Origin,DateAdded)
     values('${newpro.user}','${newpro.tiny}','${newpro.full}', ${newpro.price}, ${newpro.cat}, '${newpro.quan}','${newpro.manu}',${newpro.seen},'${newpro.org}','${newpro.dat}')`
    return db.save(sql);
}

exports.editN = (newn,oldn) =>{
    var sql = `update products set ProName='${newn}' where ProName='${oldn}'`
    return db.save(sql);
}

exports.editS = (seen,oldn) =>{
    var sql = `update products set Seen=${seen} where ProName='${oldn}'`
    return db.save(sql);
}

exports.editTiny = (tiny,oldn) =>{
    var sql = `update products set TinyDes='${tiny}' where ProName='${oldn}'`
    return db.save(sql);
}

exports.editFull = (full,oldn) =>{
    var sql = `update products set FullDes='${full}' where ProName='${oldn}'`
    return db.save(sql);
}

exports.editQua = (quan,oldn) =>{
    var sql = `update products set Quantity=${quan} where ProName='${oldn}'`
    return db.save(sql);
}

exports.editDate = (date,oldn) =>{
    var sql = `update products set DateAdded='${date}' where ProName='${oldn}'`
    return db.save(sql);
}

exports.editCat = (cat,oldn) =>{
    var sql = `update products set CatID=${cat} where ProName='${oldn}'`
    return db.save(sql);
}

exports.editManu = (manu,oldn) =>{
    var sql = `update products set Manufacturer='${manu}' where ProName='${oldn}'`
    return db.save(sql);
}

exports.addCat = cat =>{
    var sql = `insert into categories(CatName) values('${cat.catn}')`
    return db.save(sql);
}