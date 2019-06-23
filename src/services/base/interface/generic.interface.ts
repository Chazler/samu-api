import { BaseEntity } from "typeorm";

export default interface IGenericService<T extends BaseEntity> {

    create(model: T): Promise<void>

    read(skip: number, take: number): Promise<T[]>

    readOne(id: number): Promise<T>

    update(model: T): Promise<void>
}