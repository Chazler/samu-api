import IGenericService from "./interface/generic.interface";
import { BaseEntity } from "typeorm";

export default class GenericService<T extends BaseEntity> implements IGenericService<T> {

    public async create(model: T): Promise<void> {
    
    }

    public async read(skip: number, take: number): Promise<T[]> {
      
    }

    public async readOne(id: number): Promise<T> {
    }

    public async update(model: T): Promise<void> {

    }
}