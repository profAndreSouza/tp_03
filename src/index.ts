import express from "express"
import { AppDataSource } from "./dataSource"

AppDataSource.initialize().then(() => {
    const app = express()

    app.use(express.json())

    app.get('/', (req, res) => {
        return res.json('ok')
    })

    return app.listen(process.env.APP_PORT, () => {
        console.log("Servidor Iniciado!")
    })
})