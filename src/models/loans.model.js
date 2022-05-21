const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database.js')

module.exports = Loans = sequelize.define('loans', {
    loa_prestamos:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    loa_state:{
        type: DataTypes.BOOLEAN
    },
    loa_date_out:{
        type: DataTypes.DATE
    },
    loa_date_entry:{
        type: DataTypes.DATE
    },
    loa_date_loan:{
        type: DataTypes.DATE
    },
    fk_loa_book:{
        type: DataTypes.INTEGER
    },
    fk_loa_usr_adm:{
        type: DataTypes.STRING
    },
    fk_loa_usr_est:{
        type: DataTypes.STRING
    }
},
    {
        timestamps: false,
    }
);