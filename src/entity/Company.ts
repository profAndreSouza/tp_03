import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('companies')
export class Company {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({nullable: true})
    phone: string

}