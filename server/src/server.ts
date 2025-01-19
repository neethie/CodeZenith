import express from "express";
import cors from "cors";

import codeRoutes from "./modules/code/code.routes";
import { connectDb } from "./config/database";
import { corsConfig } from "./config/cors";

export const server = express();

connectDb();

server.use(cors(corsConfig));
server.use(express.json());
server.use("/api/code", codeRoutes);
