import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Discipline } from "./Discipline"

@Entity('courses')
export class Course {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    workload: number

    @Column({ default: true })
    isActive: boolean

    @OneToMany(() => Discipline, (discipline) => discipline.course)
    disciplines: Discipline[]
}