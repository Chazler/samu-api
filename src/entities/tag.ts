import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
import { TagSettings } from './tagsettings';

@Entity()
export class Tag extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public tagName : string

    @Column()
    public tags: TagSettings

}