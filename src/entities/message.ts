import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
import { Tag } from './tag';

@Entity()
export class Message extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public poster : User;

    @Column()
    public title : string
    
    @Column()
    public content : string

    @Column()
    public created_at : number;

    @Column()
    public tags: Tag[]

}