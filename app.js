const express =require ('express');
const expressLayouts=require('express-ejs-layouts');
const flash=require('connect-flash');
const session=require('express-session');
const passport=require('passport');
var mysql = require('mysql');


const app=express();

require('./config/passport')(passport);

//Connect To Mysql
require('./config/keys');
//connect to redis
 require('./module/cache');

//EJS
app.use(expressLayouts);
app.set('view engine','ejs');

//bodyParser
app.use(express.urlencoded({ extended:false }));

// express Session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  }));


app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global variables
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

//Routes

app.use('/users',require('./routes/users'));
app.use('/',require('./routes/posts'));
app.use('/posts',require('./routes/posts'));


const PORT= process.env.PORT || 5000;

app.listen(PORT,
  console.log (`Server is Conected on port ${PORT}`));
