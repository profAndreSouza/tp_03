import express from "express"
import { AppDataSource } from "./dataSource"
import routes from "./routes"

AppDataSource.initialize().then(() => {
    const app = express()

    app.set('views', './view')
    app.set('view engine', 'html');
    
    app.use(express.json())
    app.use(routes)

    return app.listen(process.env.APP_PORT, () => {
        console.log("Servidor Iniciado!")
    })
})