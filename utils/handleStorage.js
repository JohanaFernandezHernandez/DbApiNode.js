const multer = require("multer")
const storage = multer.diskStorage({
    destination: function(req, file, cd){
        const pathStorage = `${__dirname}/../storage`;
        cd(null, pathStorage)

    },
    filename: function(req, file, cd){
        //TODO los archivos que se suben tienen una extencion ejp: .pdf , .png , .mp4 etc

        const ext = file.originalname.split(".").pop() //TODO["name", "png"]
        const filename = `file-${Date.now()}.${ext}` //TODO retorna file-dkfbhbggfjb.png este va a ser el nuevo nombre del archivo
        cd(null, filename)

    },

   

});

const uploadMiddleware = multer({storage});

module.exports = uploadMiddleware