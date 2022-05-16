const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database.js')

module.exports = Authors = sequelize.define('authors', {
    aut_id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    aut_name:{
        type: DataTypes.STRING,
    },
    aut_lastname:{
        type: DataTypes.STRING,
    }
},
    {
        timestamps: false,
    }
);