var db = require('../database/db');

exports.add = user => {
    var sql = `insert into users(f_Username, f_Password, f_Name, f_Email, f_DOB, f_Permission) values('${user.username}', '${user.password}', '${user.name}', '${user.email}', '${user.dob}', ${user.permission})`;
    return db.save(sql);
}

exports.login = user => {
    var sql = `select * from users where f_Username = '${user.username}' and f_Password = '${user.password}'`;
    return db.load(sql);
}

exports.showinfo = user =>{
    var sql = `select users(f_ID,f_Username,f_Name,f_Email,f_DOB) from users where f_Username='${user}'`
    return db.load(sql);
}