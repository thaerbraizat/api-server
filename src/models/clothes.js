'use strict';

const clothes = (sequalize, DataTypes) => {
    sequalize.define('clothes', {
        clothesType: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
     
    });
}

module.exports = clothes