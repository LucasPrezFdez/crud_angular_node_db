import { pool } from "../config/db";
import { Student } from "../types/student";

export const getAllStudents = async (): Promise<Student[]> => {
  const [rows] = await pool.query<Student[]>(
    "SELECT * FROM students ORDER BY created_at DESC",
  );
  return rows;
};
