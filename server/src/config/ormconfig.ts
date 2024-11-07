import { DataSource } from "typeorm";
import { University } from "../entities/University";
import { Department } from "../entities/Department";
import { Specialization } from "../entities/Specialization";
import { Student } from "../entities/Student";

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "postgres",
  port: parseInt(process.env.DB_PORT || "5432", 10),
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "postgres",
  database: process.env.DB_NAME || "university_portal",
  synchronize: true,
  logging: false,
  entities: [University, Department, Specialization, Student],
});

export default AppDataSource;
