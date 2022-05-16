const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database.js')

module.exports = User = sequelize.define('users', {
    usr_id:{
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    usr_login:{
        type: DataTypes.STRING
    },
    usr_pass:{
        type: DataTypes.STRING
    },
    usr_name:{
        type: DataTypes.STRING
    },
    usr_lastname:{
        type: DataTypes.STRING
    }, 
    usr_state:{
        type: DataTypes.BOOLEAN
    }, 
    usr_type:{
        type: DataTypes.INTEGER
    }, 
    usr_identify:{
        type: DataTypes.STRING,
        primaryKey: true
    }, 
    usr_type_identify:{
        type: DataTypes.INTEGER
    }, 
    fk_usr_rol:{
        type: DataTypes.INTEGER
    }
},
    {
        timestamps: false,
    }
);

/*(async () => {
    await sequelize.sync({ force: true });
    // Code here
})();*/
