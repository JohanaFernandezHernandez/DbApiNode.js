const {tracksModel} = require('../models');


//Obtener una lista 

const getItems = async (req, res) => {
    const data = await tracksModel.find({});
    res.send({data})
};

//Obtener un detalle 
const getItem = (req, res) => {

};

//Insertar un registro
const createItem = async (req, res) => {
    const {body} = req
    console.log(body)
    const data = await tracksModel.create(body)
    res.send({data})



};

//Actualizar un registro
const updateItem = (req, res) => {

};

//Eliminar un registro
const deleteItem = (req, res) => {

};

module.exports =  {getItems, getItem , createItem, updateItem, deleteItem };