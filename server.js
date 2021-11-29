require('dotenv').config()
const {app} = require("./src/app");
const port = process.env.PORT || 7070;

app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`)
});