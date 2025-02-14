import { CorsOptions } from "cors";
import dotenv from "dotenv";
dotenv.config();

export const corsConfig: CorsOptions = {
    origin: function (origin, callback) {
        const whitelist = [process.env.FRONTEND_URL];

        if (!origin || whitelist.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("No permitido por CORS"));
        }
    },
};
