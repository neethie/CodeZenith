import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
import { Code } from "../modules/code/code.model";
dotenv.config();

export const db = new Sequelize(process.env.DATABASE_URI!, {
    logging: false,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
    models: [Code],
});

export const connectDb = () => {
    db.sync();
};
