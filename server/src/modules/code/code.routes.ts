import { Router } from "express";
import { CodeController } from "./code.controller";

const router = Router();

router.get("/", CodeController.getAll);
router.get("/:id", CodeController.getById);

router.post("/create", CodeController.create);

export default router;
