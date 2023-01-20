import { AppDataSource } from "../dataSource";
import { Course } from "../entity/Course";

export const CourseRepository = AppDataSource.getRepository(Course)