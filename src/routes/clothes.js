'use strict';

const express = require('express');

const router = express.Router();

const {clothesCollection} = require('../models/index');

router.get('/food', getAllClothes);
router.get('/food/:id', getClothes);
router.post('/food', createClothes);
router.put('/food/:id', updateClothes);
router.delete('/food/:id', deleteClothes);

async function getAllClothes(req, res) {

    let food = await clothesCollection.read();
    res.status(200).json(food);
}

async function getClothes(req, res) {
    const id = req.params.id;
    
    let food = await clothesCollection.read(id);
    res.status(200).json(food);
}

async function createClothes(req, res) {
    let newFood = req.body;
    let food = await clothesCollection.create(newFood);
    res.status(200).json(food);
}
async function deleteClothes(req, res) {
    const id = req.params.id;
    
    let food = await clothesCollection.delete(id);
    res.status(200).json(food);
}


async function updateClothes(req, res) {
    const id = req.params.id;
    let newFood = req.body;
    let food = await clothesCollection.create(id,newFood);
    res.status(200).json(food);
}


module.exports = router;