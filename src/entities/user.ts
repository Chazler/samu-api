import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public first_name: string;

    @Column()
    public last_name: string;



}