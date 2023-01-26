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
postRouter.put("/:postID", (req, res) => {
    const postID = req.params.postID
    const updatedObject = req.body
    const postIndex = Posts.findIndex(posts => posts._id === postID)
    const updatedPost = Object.assign(Posts[postIndex], updatedObject)
    res.status(202).send(updatedPost)
})


module.exports = postRouter;