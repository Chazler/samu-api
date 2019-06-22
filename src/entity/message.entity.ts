import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
import { Tag } from './tag.entity';
import { User } from './user.entity';

@Entity()
export class Message extends BaseEntity {

    constructor(title: string, content: string, author: User, created_at: number, tags: Tag[]) {
        super();
        this.title = title;
        this.content = content;
        this.author = author;
        this.created_at = created_at;
    }

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public title: string

    @Column()
    public content: string

    @Column()
    public author: User;

    @Column()
    public created_at: number;

    @Column()
    public tags: Tag[]

}