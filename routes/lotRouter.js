const express = require("express");
const lotRouter = express.Router();
const Lots = require("../models/lots.js");

// GET ALL
lotRouter.get("/", (req, res, next) => {
    Lots.find((err, lots) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(lots)
    })
})

// POST ONE
lotRouter.post("/", (req, res, next) => {
    const newLot = new Lots(req.body)
    newLot.save((err, savedLot) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedLot)
    })
})
// Update
lotRouter.put("/:lotID", (req, res, next) => {
    Lots.findOneAndUpdate(
     { _id: req.params.lotID }, 
     req.body, 
     { new: true },
     (err, updatedLots) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(updatedLots)
     }  
    )
   
})

module.exports = lotRouter;