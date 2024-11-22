const {DataTypes} = require('sequelize')
const sequelize = require('../db.js');

const Groups = sequelize.define('Groups',{
    idGroup:{type:DataTypes.BIGINT,primaryKey:true, autoIncrement:true},
    groupName:{type:DataTypes.CHAR},
    desciption:{type:DataTypes.TEXT},
    imageGroup:{type:DataTypes.STRING}
})

const Teams = sequelize.define('Teams',{
    idTeam: {type:DataTypes.BIGINT, primaryKey:true, autoIncrement:true},
    teamName:{type:DataTypes.CHAR},
    desciption:{type:DataTypes.TEXT},
    photoTeam:{type:DataTypes.STRING}
})

const Pilots = sequelize.define('Pilots',{
    idPilot:{type:DataTypes.BIGINT, primaryKey: true, autoIncrement:true},
    PilotsName:{type:DataTypes.CHAR},
    PilotsSurname:{type:DataTypes.CHAR},
    PilotsBiography:{type:DataTypes.TEXT}

})
const Trophies = sequelize.define('Trophies',{
    idTrophie:{type:DataTypes.BIGINT, primaryKey:true, autoIncrement:true},
    nameTrophie:{type:DataTypes.CHAR},
    imageTrophie:{type:DataTypes.STRING}
})

//Связь 1:M
Teams.hasMany(Pilots);
Pilots.belongsTo(Teams);
//Связь 1:M
Pilots.hasMany(Trophies);
Trophies.belongsTo(Pilots);
// Связь 1:M
Groups.hasMany(Teams);
Teams.belongsTo(Groups);