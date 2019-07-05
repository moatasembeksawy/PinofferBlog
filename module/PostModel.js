const express=require('express');
var sql=require('../config/keys');
const cache = require('./cache');
//Task object constructor
var Posts={
 
    getAllPosts:(callback)=>{
        let datetime = new Date();
        
    return sql.query("Select *,DATE_FORMAT(publish_date,'%Y-%m-%d') AS date_y from posts where publish_date<=? order by publish_date desc",datetime,callback);
    },
     getuserPosts:(user,callback)=>{
    return sql.query("select *,sum(facebook_views+google_views+other_views) as total_views ,DATE_FORMAT(publish_date,'%Y-%m-%d') AS date_y from posts where user_name=? group by post_id order by publish_date desc",[user],callback);
     },
     addPost:(post,user_name,callback)=>{
     return sql.query("Insert into posts (title,content,publish_date,user_name) values(?,?,?,?)",[post.title,post.content,post.date,user_name],callback);
     },
     getPost:(post,callback)=>{
        return sql.query("Select *,sum(facebook_views+google_views+other_views)as total_views ,DATE_FORMAT(publish_date,'%Y-%m-%d') AS date_y from posts where post_id=? group by post_id",[post],callback);
    },
    addView:(face,goole,other,post,callback)=>{
     
        return sql.query("update posts set facebook_views=facebook_views+? , google_views=google_views+?,other_views=other_views+? where post_id=?",[face,goole,other,post],callback);
    },
     deletePost:(post_id,callback)=>{
      return sql.query("delete from posts where post_id=?",[post_id],callback);
     }
     ,
     editPost:(post,post_id,callback)=>{
      return sql.query("update posts set title=?,content=?,publish_date=? where post_id=?",[post.title,post.content,post.date,post_id],callback);
     }
     
    };
module.exports=Posts;