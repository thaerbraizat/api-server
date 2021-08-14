'use strict';

const express = require('express');

const router = express.Router();

const {foodCollection} = require('../models/index');

router.get('/food', getAllFood);
router.get('/food/:id', getFood);
router.post('/food', createFood);
router.put('/food/:id', updateFood);
router.delete('/food/:id', deleteFood);

async function getAllFood(req, res) {

    let food = await foodCollection.read();
    res.status(200).json(food);
}

async function getFood(req, res) {
    const id = req.params.id;
    
    let food = await foodCollection.read(id);
    res.status(200).json(food);
}

async function createFood(req, res) {
    let newFood = req.body;
    let food = await foodCollection.create(newFood);
    res.status(200).json(food);
}
async function deleteFood(req, res) {
    const id = req.params.id;
    
    let food = await foodCollection.delete(id);
    res.status(200).json(food);
}


async function updateFood(req, res) {
    const id = req.params.id;
    let newFood = req.body;
    let food = await foodCollection.create(id,newFood);
    res.status(200).json(food);
}


module.exports = router;