const express = require ('express');
const bodyParser=require('body-parser')
 const app = express();
 const Post = require ('./models/post')
 const Mongoose =require ('mongoose')
 const postRoutes = require ('./routes/posts') 
 Mongoose.connect("mongodb+srv://jahid:ggwp10101010@cluster0.bplei.mongodb.net/mean?retryWrites=true&w=majority").then(
     () => {   console.log("database connected");}
 ).catch ( () => {
     console.log('connection failed')
 })
 app.use(bodyParser.json())
 app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });
  
  // app.post("/api/posts", (req, res, next) => {
  //   const post = new Post({
  //     title: req.body.title,
  //     content: req.body.content
  //   });
  //   post.save().then(createdPost => {
  //     res.status(201).json({
  //       message: "Post added successfully",
  //       postId: createdPost._id
  //     });
  //   });
  // });
  
  // app.get("/api/posts", (req, res, next) => {
  //   Post.find().then(documents => {
  //     res.status(200).json({
  //       message: "Posts fetched successfully!",
  //       posts: documents
  //     });
  //   });
  // });
  
  // app.delete("/api/posts/:id", (req, res, next) => {
  //   Post.deleteOne({ _id: req.params.id }).then(result => {
  //     console.log(result);
  //     res.status(200).json({ message: "Post deleted!" });
  //   });
  // });
  app.use("/api/posts", postRoutes);
 module.exports = app;