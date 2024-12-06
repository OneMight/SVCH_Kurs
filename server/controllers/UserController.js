const {User} = require('../models/models');
const { Op } = require('sequelize');

class UserController{
    async getUsers(req,res){
        const { page = 1, limit = 10, sortBy = 'idUser', order = 'ASC', search = ''} = req.query;
        const offset = (page - 1) * limit;
        const where ={}
        
        if(search){
            where[Op.or]= [
                {login:{[Op.like]: `%${search}%`}},
                {name:{[Op.like]: `%${search}%`}},
                {role:{[Op.like]: `%${search}%`}}

            ]
        }
        const users = await User.findAndCountAll({
            where,
            limit,
            offset,
            order: [[sortBy,order]]
        });
        return res.json({
            total:users.count,
            pages: Math.ceil(users.count / limit),
            data: users.rows
        })
    }
    async getById(req,res){
        try{
            const id = req.paras.id;
            const data = await User.findByPk(id);
            if(!data){
                return res.status(404).json({message: "User is not found"})
            }
        }catch(error){
            return res.status(500).json({message: "Request is not correctly: ", error})
        }
    }
    async createUser (req,res){
        const {email,login,role} = req.body;
        try{
            const user = await User.create({
                email: email,
                login: login,
                role: role
            })
            return res.status(201).json(user);
        }catch(error){
            return res.status.json('Creating user error')
        }
    }
    async updateUser(req, res){
        const id = req.params.id;
        const {name, age, nationality} = req.body;
        try{
            const user = await User.findByPk(id);
            if(!user){
                return res.status(404).json('User not found')
            }
            await user.update({name, age, nationality});
            return res.status(201).json('User is updated')
        }catch(error){
            return res.status(500).json('Something went wrong')
        }
    }
    async blockUser(req,res){
        const id = req.params.id;
        try{
            const user = await User.findByPk(id);
            if(!user){
                return res.status(404).json('User not found')
            }
            await user.update(!isBlocked);
            return res.status(201).json('User is blocked')
        }catch(error){
            return res.status(500).json('Something went wrong')
        }
    }
}
module.exports = new UserController()