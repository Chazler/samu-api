import { Message } from "src/entities/message";
import { IRepository } from "src/repositories/base/repository.interface";
import { Repository } from "src/repositories/base/repository";

export class IMessageRepository extends Repository<Message> {

}