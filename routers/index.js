const express = require("express")
const fs = require("fs")
const router = express.Router();

const PATH_ROUTES = __dirname; //Ruta absoluta de mi equipo direccion de la ruta en mi pc


const removeExtension = (fileName) => {
    return fileName.split('.').shift()

}
fs.readdirSync(PATH_ROUTES).filter((file) => {
    const name = removeExtension(file)
    if(name !== 'index'){
        router.use(`/${name}`,require(`./${file}`))
    }

})


module.exports = router