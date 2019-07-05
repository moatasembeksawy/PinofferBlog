const express=require("express");
const client = require('../module/cache');
//post model
const PostModel=require('../module/PostModel');
//user Authentiction
const { ensureAuthenticated }=require('../config/auth');

const postsrouter=express.Router();

postsrouter.route('/')
.get((req,res)=>{
    //using redis
    const PostsRedisKey = 'user:Posts';
    client.get(PostsRedisKey, (err, Posts) => {
        // If that key exists in Redis store
        if (Posts) {
            let post=JSON.parse(Posts);
             res.render('posts', {
                posts: post
            });
 
        } else { 
    PostModel.getAllPosts((err,Posts)=>{
        if(err)throw err;
        client.setex(PostsRedisKey, 60, JSON.stringify(Posts));
        res.render('posts', {
            posts: Posts
        });
   })}});
});

postsrouter.route('/read_post/:post_id')
.get((req,res)=>{
        var face=0;
        var google=0;
        var other=0;
        if(req.headers['referer']=='https://www.facebook.com/')face=1;
        else if(req.headers['referer']=='https://www.google.com/')google=1;
        else other=1;
        PostModel.addView(face,google,other,req.params.post_id,(err,posts)=>{
            if (err) {
                res.redirect('/');
            }
        });
    PostModel.getPost(req.params.post_id,(err,posts)=>{
        if (err) {
            res.redirect('/');
        }
        res.render('read_post', {
            posts: posts
        });
    });
});


postsrouter.route('/add_post')
.get(ensureAuthenticated,(req, res) => res.render('add_post',{
    name:req.user
}))
.post(ensureAuthenticated,(req, res) =>{
    PostModel.addPost(req.body,req.user,(err)=>{
        if (err) {
            res.redirect('/dashboard');
        }
        req.flash(
            'success_msg',
            'The Post Is Inserted'
          );
        res.redirect('/add_post');
    });
});


postsrouter.route('/delete_post/:post_id')
.get(ensureAuthenticated,(req, res) =>{
    PostModel.deletePost(req.params.post_id,(err,posts)=>{
        if (err) {
            res.redirect('/');
        }
        req.flash(
            'success_msg',
            'The Post Is Deleted'
          );
        res.redirect('/posts/dashboard');
    })
});

postsrouter.route('/edit_post/:post_id')
.get(ensureAuthenticated,(req, res) =>{
    PostModel.getPost(req.params.post_id,(err,posts)=>{
        if (err) {
            res.redirect('/dashboard');
        }
        res.render('edit_post', {
            posts:posts
        });
    })
})
.post(ensureAuthenticated,(req, res) =>{
    PostModel.editPost(req.body,req.params.post_id,(err)=>{
        if (err) {
            res.redirect('/');
        }
        req.flash(
            'success_msg',
            'The Post Is Updated'
          );
        res.redirect('/posts/dashboard');
    });
});

postsrouter.route('/dashboard')
.get(ensureAuthenticated,(req, res) => {
    PostModel.getuserPosts(req.user,(err,posts)=>{
        if (err) {
            res.redirect('/');
        }
        res.render('dashboard', {
            posts:posts,name:req.user
        });
})
});

module.exports=postsrouter;