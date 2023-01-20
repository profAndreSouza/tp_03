import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm"
import { Class } from "./Class"

@Entity('persons')
export class Person {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    cpf: string

    @Column({nullable: true})
    phone: string

    @ManyToMany(() => Class, (classe) => classe.students)
    classes: Class[]

}