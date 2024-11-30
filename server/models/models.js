const {DataTypes} = require('sequelize')
const sequelize = require('../db.js');

const Group = sequelize.define('Groups',{
    idGroup:{type:DataTypes.BIGINT,primaryKey:true, autoIncrement:true},
    groupName:{type:DataTypes.CHAR},
    desciption:{type:DataTypes.TEXT},
    imageGroup:{type:DataTypes.STRING},
    hidendisc:{type:DataTypes.TEXT}
})

const Team = sequelize.define('Teams',{
    idTeam: {type:DataTypes.BIGINT, primaryKey:true, autoIncrement:true},
    teamName:{type:DataTypes.CHAR},
    desciption:{type:DataTypes.TEXT},
    photoTeam:{type:DataTypes.STRING},
    hidendisc:{type:DataTypes.TEXT}
})

const Pilot = sequelize.define('Pilots',{
    idPilot:{type:DataTypes.BIGINT, primaryKey: true, autoIncrement:true},
    PilotsName:{type:DataTypes.CHAR},
    PilotsSurname:{type:DataTypes.CHAR},
    PilotsBiography:{type:DataTypes.TEXT}

})
const Trophie = sequelize.define('Trophies',{
    idTrophie:{type:DataTypes.BIGINT, primaryKey:true, autoIncrement:true},
    nameTrophie:{type:DataTypes.CHAR},
    imageTrophie:{type:DataTypes.STRING}
})

//Связь 1:M
Team.hasMany(Pilot);
Pilot.belongsTo(Team);
//Связь 1:M
Pilot.hasMany(Trophie);
Trophie.belongsTo(Pilot);
// Связь 1:M
Group.hasMany(Team);
Team.belongsTo(Group);

sequelize.sync().then(result=>{
    console.log(result);
  })
  .catch(err=> console.log(err));

  module.exports={ Group,Team,Pilot,Trophie }