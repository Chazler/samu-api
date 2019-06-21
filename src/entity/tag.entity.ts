import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
import { TagSettings } from './tagsettings.entity';

@Entity()
export class Tag extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public tagName : string

    @Column()
    public tags: TagSettings

}