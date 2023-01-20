import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Course } from "./Course"

@Entity('disciplines')
export class Discipline {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    workload: number

    @ManyToOne(() => Course, (course) => course.disciplines)
    @JoinColumn({name: 'courseId'})
    course: Course
}