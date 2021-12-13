const models = require('../database/models');
const createJugo = async (req,res)=>{
    try{
        const jugo = await models.jugos.create(req.body);
        return res.status(201).json({
            jugo
        });
    }catch (error){
        return res.status(500).json({
            error:error.message
        });
    }
};

const getAlljugos = async (req, res)=>{
    console.log('Obteniendo Juguitos');
    try{
        const jugos = await models.jugos.findAll({
           include:[]
        });
        return res.status(200).json({jugos});
    } catch (error){
        return res.status(500).send(error.message);
    }
};
module.exports = {
    createJugo,
    getAlljugos
};
