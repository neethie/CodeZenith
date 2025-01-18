import { Sequelize } from "sequelize-typescript";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

export const db = new Sequelize(process.env.DATABASE_URI!, {
    logging: false,
    dialectOptions: {
        ssl: {
            ca: fs.readFileSync("./src/config/ca.pem").toString(),
            require: true,
            rejectUnauthorized: false,
        },
    },
});
