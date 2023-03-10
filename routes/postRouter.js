const express = require("express");
const postRouter = express.Router();
const Posts = require("../models/posts.js");

// GET ALL
postRouter.get("/", (req, res, next) => {
    Posts.find((err, posts) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(posts)
    })
})

// POST ONE
postRouter.post("/", (req, res, next) => {
    const newPost = new Posts(req.body)
    newPost.save((err, savedPost) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedPost)
    })
})


// Update
postRouter.put("/:postID", (req, res, next) => {
    Posts.findOneAndUpdate(
     { _id: req.params.postID }, 
     req.body, 
     { new: true },
     (err, updatedPost) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(updatedPost)
     }  
    )
   
})

// Delete
postRouter.delete("/:postID", (req, res, next) => {
    Posts.findOneAndDelete({ _id: req.params.postID }, (err, deletedItem) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res
        .status(200)
        .send(`Successfully deleted item ${deletedItem.title}!`);
    });
});

// Get by type
postRouter.get("/search/type", (req, res, next) => {
    Posts.find({ type: req.query.type }, (err, posts) => {
        if (err) {
            res.status(500);
            return next(err);
          }
          return res.status(200).send(posts)
    })
})
module.exports = postRouter;