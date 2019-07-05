const bcrypt =require('bcryptjs');
var sql=require('../config/keys');
//Task object constructor
var Users={
     getuser:(user,callback)=>{
    return sql.query("select * from users where name=? or email=?",[user.name,user.email],callback);
     },
     addUser:(user,pass,callback)=>{
     
     return sql.query("Insert into users (name,email,password) values(?,?,?)",[user.name,user.email,pass],callback);
     },
     loginuser:(email,callback)=>{
     
        return sql.query("select * from users where (name=? or email=?)",[email,email],callback);
    },
    passportuser:(name,callback)=>{
     
        return sql.query("select * from users where name=?",[name],callback);
    }     
    };
module.exports=Users;



