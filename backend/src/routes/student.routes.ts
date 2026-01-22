import { Router } from "express";
import { listStudents } from "../controllers/student.controller";

const router = Router();

router.get("/", listStudents);

export default router;
