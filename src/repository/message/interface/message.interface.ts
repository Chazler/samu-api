import { Message } from "src/entity/message.entity";
import { IRepository } from "src/repository/repository.interface";
import { Repository } from "src/repository/base/repository";

export class IMessageRepository extends Repository<Message> {

}