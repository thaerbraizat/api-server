'use strict';

const Food = (sequelize, DataTypes) => sequelize.define('first', {
    foodtype: {
        type: DataTypes.STRING
    }
  
});

module.exports = Food;