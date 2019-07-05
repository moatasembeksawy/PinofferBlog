const express=require("express");
const passport=require('passport');
const bcrypt= require('bcryptjs');

//user model
const User=require('../module/User');

const logrouter=express.Router();
logrouter.route('/login')
.get((req,res)=>res.render("login"))
.post((req,res,next)=>{
    passport.authenticate('local',{
        successRedirect:'/posts/dashboard',
        failureRedirect:'/users/login',
        failureFlash:true
    })(req,res,next);
});

logrouter.route('/logout')
.get((req,res)=>{
    req.logout();
    req.flash('success_msg','You are logged out');
    res.redirect('/users/login');
});

logrouter.route('/register')
.get((req,res)=>res.render("register"))
.post((req,res)=>{
    var{name,email,password,password2}= req.body;
    let errors=[];

    if(!name ||!email||!password||!password2){
        errors.push({msg:'Please Fill All Fields'});
    }
    if(password!==password2){
        errors.push({msg:'Passwords Not Match'});
    }
    if(password.length<6){
        errors.push({msg:'Password Should be At least 6 characters'});
    }

    if(errors.length>0){
        res.render('register',{
            errors,
            name,
            email,
            password,
            password2
        });
    }
    else{

        User.getuser(req.body,(err,rows)=>{
            if(err)
              {
                res.redirect('./register');
              }
            if(rows.length==0){
                var newpass=password;
                let hash = bcrypt.hashSync(newpass, 10);
                User.addUser(req.body,hash,(err,count)=>{
                    if(err)
                    {
                        res.redirect('./register');
                    }
                    else{
                        req.flash(
                            'success_msg',
                            'You are now registered and can log in'
                          );
                        res.redirect('./login');
                    }
                });
                
            }
            else{
                errors.push({ msg: 'Email or User already exists' });
                res.render('register', {
                errors,
                name,
                email,
                password,
                password2
             });
            }  
             
            
        });
    }
});

module.exports=logrouter;