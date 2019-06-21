import { BaseEntity } from "typeorm";
import { IWrite } from "src/repository/base/interface/IWrite";
import { IRead } from "src/repository/base/interface/IRead";

export interface IRepository<T extends BaseEntity> extends IWrite<T>, IRead<T> { 
    
}