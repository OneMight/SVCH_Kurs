const {User} = require('../models/models');
const { Op } = require('sequelize');
const {validationResult, body} = require('express-validator')
const UserService = require('../service/userService');
const userService = require('../service/userService');
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
            await user.update(...user,!isBlocked);
            return res.status(201).json('User is blocked')
        }catch(error){
            return res.status(500).json('Something went wrong')
        }
    }
    async registration(req,res){
        try{
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return res.status(400).json('Validation is incorrect')
            }
            const {email, password, login} = req.body;
            const userData = await UserService.registration(email,password,login)
            res.cookie('refreshToken', userData.refreshToken,{maxAge:10*24*60*60*1000, httpOnly:true})
            return res.status(200).json(userData)
        }catch(error){
           return res.status(500).json({message: `Internal server error ${error.message}`})
        }
    }
    async logining(req,res){
        try{
            const {email, password, login} = req.body;
            const userData = await userService.login(email,password,login);
            res.cookie('refreshToken', userData.refreshToken,{maxAge:10*24*60*60*1000, httpOnly:true})
            return res.status(200).json(userData)
        }catch(e){
            
        }
    }
    async logout(req,res,next){
        try{
            const {refreshToken} = req.cookies;
            const token = await userService.logout(refreshToken)
            res.clearCookie('refreshToken');
            return res.status(200)
        }catch(e){
            
        }
    }
    async refresh(req,res,next){
        try{
            const refreshToken = req.cookies;
            const userData = await UserService.refresh(refreshToken)
            res.cookie('refreshToken', userData.refreshToken,{maxAge:10*24*60*60*1000, httpOnly:true})
            return res.json(userData)
        }catch(e){
            
        }
    }
}
module.exports = new UserController()