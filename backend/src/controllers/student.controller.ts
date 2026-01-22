import { Request, Response } from "express";
import * as studentService from "../services/student.service";

export const listStudents = async (_req: Request, res: Response) => {
  try {
    const students = await studentService.getAllStudents();
    res.json(students);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving students" });
  }
};
