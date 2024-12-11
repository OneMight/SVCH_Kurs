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
    PilotName:{type:DataTypes.CHAR, allowNull:false},
    Nationality:{type:DataTypes.CHAR, allowNull:false},
    photoPilot:{type:DataTypes.STRING, allowNull:false},
    photoNationality:{type:DataTypes.STRING, allowNull:true},
    Age:{type:DataTypes.INTEGER, allowNull:false},
    Biography:{type:DataTypes.TEXT}

})
const Trophie = sequelize.define('Trophies',{
    idTrophie:{type:DataTypes.BIGINT, primaryKey:true, autoIncrement:true},
    nameTrophie:{type:DataTypes.CHAR},
    imageTrophie:{type:DataTypes.STRING}
})

const News = sequelize.define('News',{
    idNews:{type:DataTypes.BIGINT, primaryKey:true, autoIncrement: true},
    desciption:{type:DataTypes.TEXT, allowNull:false},
    photo:{type:DataTypes.STRING, allowNull:false}
})
const PilotStat = sequelize.define('PilotStat',{
    idPilotStat:{type:DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
    Starts:{type:DataTypes.SMALLINT, allowNull: false},
    year:{type:DataTypes.CHAR(4), allowNull:false},
    Scores:{type:DataTypes.CHAR(5), allowNull:false},
    Wins:{type:DataTypes.SMALLINT, allowNull:false},
    Podiums:{type:DataTypes.SMALLINT, allowNull:false},
    PolePos:{type:DataTypes.SMALLINT, allowNull:false},
    PlaceInSeason:{type:DataTypes.SMALLINT, allowNull:false}
})
const BestCircuit = sequelize.define('BestCircuit',{
    idBestCircuit:{type:DataTypes.BIGINT, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.CHAR(50), allowNull:false},
    photo:{type:DataTypes.CHAR(50), allowNull:false},
    bestLap:{type:DataTypes.CHAR(15), allowNull:false},
    bestLapSpeed:{type:DataTypes.CHAR(10),allowNull:false},
    timeInPitstops:{type:DataTypes.CHAR(15),allowNull:false},
    Pitstops:{type:DataTypes.SMALLINT,allowNull:false}
})
const User = sequelize.define('User',{
    idUser:{type:DataTypes.BIGINT, primaryKey:true, autoIncrement: true},
    email:{type:DataTypes.CHAR(50), allowNull:false},
    login:{type:DataTypes.CHAR(50), allowNull:false},
    password:{type:DataTypes.STRING, allowNull:false},
    name:{type:DataTypes.CHAR(50), allowNull:true},
    age:{type:DataTypes.INTEGER, allowNull:true},
    isBlocked:{type:DataTypes.BOOLEAN, allowNull:false},
    nationality:{type:DataTypes.CHAR(50), allowNull:true},
    role:{type:DataTypes.CHAR(50), allowNull:false}
})

const SavedPilot = sequelize.define('SavedPilot',{
    idSavedPilot:{type:DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
    idPilot:{type:DataTypes.BIGINT, allowNull:false, references: { model: Pilot, key: 'idPilot' }},
    idUser: {type:DataTypes.BIGINT, allowNull:false, references: { model: User, key: 'idUser' } }
})
const Token = sequelize.define('Token',{
    idToken:{type:DataTypes.BIGINT, primaryKey:true, autoIncrement:true},
    refreshToken:{type:DataTypes.STRING(1024)},
    idUser:{type:DataTypes.BIGINT,}
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
// M:M
User.belongsToMany(Pilot, {through: SavedPilot, foreignKey: 'idUser' });
Pilot.belongsToMany(User, {through: SavedPilot,  foreignKey: 'idPilot' });

//1:M
Pilot.hasMany(BestCircuit);
BestCircuit.belongsTo(Pilot);

//1:M
Pilot.hasMany(PilotStat);
PilotStat.belongsTo(Pilot);

sequelize.sync().then(result=>{
    console.log(result);
  })
  .catch(err=> console.log(err));

  module.exports={ Group,Team,Pilot,Trophie, News, PilotStat, BestCircuit, User, SavedPilot,Token }