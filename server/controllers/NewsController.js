const {News} = require('../models/models')

class NewsController{
    async getAllNews(req,res){
        const { page = 1, limit = 10} = req.query;
        const offset = (page - 1) * limit;
        const news = await News.findAndCountAll({
            limit,
            offset
        });
        return res.json({
            total: news.count,
            pages: Math.ceil(news.count / limit),
            data: news.rows
        })
    }

    async createNews(req,res){
        const {desciption, photo} = req.body;
        try{
            const news = await News.create({
                desciption:desciption,
                photo:photo
            })
            return res.status(201).json(news)
        }catch(error){
            return res.status(500).json('Internal server error')
        }
    }
    async deleteNews(req, res){
        const id = req.rapams.id
        try{
            const news = await News.findByPk(id)
            if(!news){
                return res.status(404).json('News not found');
            }
            await news.destroy();
            return res.status(204).json('News delete');
        }catch(error){
            return res.status(500).json('Internal server error', error)
        }
    }

}

module.exports = new NewsController();