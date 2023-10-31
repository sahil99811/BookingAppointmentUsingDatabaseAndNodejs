const Sequelize=require('sequelize');

const sequelize=require('../config/DbConnect');
const User=sequelize.define('User',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true,
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false
    },
    phoneno:{
        type:Sequelize.BIGINT,
        allowNull:false
    }
})

module.exports=User;