import express, { application } from "express";
import db from "./config/db.Connect.js";
import routes from "./routes/index.js"

db.on("error", console.log.bind(console, 'Erro de conexao Banco...'))
db.once("open", () => {
    console.log('Conexao com banco completa....')
})

const app = express();

app.use(express.json())

routes(app);

export default app