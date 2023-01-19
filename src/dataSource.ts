import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from "typeorm"

const port = process.env.DB_PORT as number | undefined;

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: port,
    username: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    entities: [`${__dirname}/**/entity/*.{ts,js}`],
    migrations: [`${__dirname}/**/migration/*.{ts,js}`]
})