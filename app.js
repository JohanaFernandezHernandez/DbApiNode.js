require("dotenv").config()
const express = require ("express")
const cors = require ("cors")
const dbConnect = require("./config/mongo");
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static("storage"))

const port = process.env.PORT || 3000

//Aqui invocamos a las Rutas

//TODO localhost/api/___loquevenga
app.use("/api", require("./routers"))


app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})

dbConnect()