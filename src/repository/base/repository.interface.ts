import { BaseEntity } from "typeorm";
import { IWrite } from "./interface/IWrite";
import { IRead } from "./interface/IRead";

export interface IRepository<T extends BaseEntity> extends IWrite<T>, IRead<T> { 
    
}