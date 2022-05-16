const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database.js')

module.exports = Rol = sequelize.define('roles', {
    rol_id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    rol_name:{
        type: DataTypes.STRING,
    }
},
    {
        timestamps: false,
    }
);