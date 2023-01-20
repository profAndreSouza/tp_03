import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Course } from "./Course"
import { Person } from "./Person"

@Entity('classes')
export class Class {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    start: Date

    @Column()
    end: Date

    @ManyToOne(() => Course, (course) => course.classes)
    @JoinColumn({name: 'courseId'})
    course: Course

    @ManyToMany(() => Person, (person) => person.classes)
    @JoinTable({
        name: 'class_student',
        joinColumn: {
            name: 'personId',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'classId',
            referencedColumnName: 'id'
        }
    })
    students: Person[]

}