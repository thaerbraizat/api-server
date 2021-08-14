'use strict';

require('dotenv').config();
const POSTGRES_URI = process.env.NODE_ENV =="test" ? 'sqlite:memory ':  "postgres://localhost:5432/thaerbraizat";
const { Sequelize, DataTypes } = require('sequelize');

const Collection = require('../models/collection-class');
const foodSchema = require('../models/food');
const colthesSchema = require('../models/clothes');

let sequelize = new Sequelize(POSTGRES_URI);

const foodModel = foodSchema(sequelize, DataTypes);
const colthesModel = colthesSchema(sequelize, DataTypes);


//export Collections 
const foodCollection = new Collection(foodModel);
const clothesCollection = new Collection(colthesModel);


module.exports = {
  db: sequelize,
  foodCollection: foodCollection,
  clothesCollection: clothesCollection
}