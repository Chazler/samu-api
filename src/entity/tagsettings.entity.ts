import { BaseEntity, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TagSettings extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    public id: number;
}