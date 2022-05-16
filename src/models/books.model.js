const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database.js')

module.exports = Books = sequelize.define('books', {
    boo_id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    boo_title:{
        type: DataTypes.STRING
    },
    boo_year:{
        type: DataTypes.INTEGER
    },
    boo_editorial:{
        type: DataTypes.STRING
    },
    boo_state:{
        type: DataTypes.BOOLEAN
    },
    fk_boo_aut:{
        type: DataTypes.INTEGER
    }
},
    {
        timestamps: false,
    }
);