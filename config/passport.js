const LocalStrategy = require('passport-local').Strategy;
const mongoose=require('mongoose');
const bcrypt= require('bcryptjs');

//load user model
const User=require('../module/User');

module.exports=(passport)=>{
    passport.use(
        new LocalStrategy({ usernameField :'email' },(email,password,done)=>{
            User.loginuser(email,(err,rows)=>{
                if(err)
                  {
                  res.redirect('/login');
                  }
                if(rows.length==0){
                    return done(null,false,{message:'that Email is not registed Or Passwor is no correct'});
                }
                if(bcrypt.compareSync(password,rows[0].password)) {
                  return done(null, rows);
                 } else {
                  return done(null,false,{message:'that Email is not registed Or Passwor is no correct'});
                 }           
                
            })
        })
    );
    passport.serializeUser((user, done) =>{
        done(null, user[0].name);
      });
      
      passport.deserializeUser((name,done) =>{
        User.passportuser(name,function(err,user){
          done(err, user[0].name);
        });
      });
}