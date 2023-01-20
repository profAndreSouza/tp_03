import { Request, Response } from "express";
import { CourseRepository } from "../repository/CourseRepository";

export class CourseController {

    async create(req: Request, res: Response){
        const {name, workload} = req.body

        if (!name) {
            res.status(400).json({message: 'Informe o nome!'})
        }

        if (!workload) {
            res.status(400).json({message: 'Informe a carga horária!'})
        }

        try {
            const newCourse = CourseRepository.create({name: name, workload: workload})

            await CourseRepository.save(newCourse)

            res.status(201).json(newCourse)

        } catch (error) {
            console.log(error)
        }

    }

    async view(req: Request, res: Response) {

        
        try {
            const courses = await CourseRepository.find()
            res.status(201).json(courses)

        } catch (error) {
            console.log(error)
        }

    }

}