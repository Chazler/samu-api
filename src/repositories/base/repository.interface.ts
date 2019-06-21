import { BaseEntity } from "typeorm";
import { IRead } from "./interfaces/IRead";
import { IWrite } from "./interfaces/IWrite";

export interface IRepository<T extends BaseEntity> extends IWrite<T>, IRead<T> { 
    
}