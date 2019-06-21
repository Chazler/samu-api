import { BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

export class Message extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    public id: number;

}
