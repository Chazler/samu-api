import { Injectable } from "@nestjs/common";
import { Message } from "src/entity/message.entity";
import GenericService from "../base/generic.service";

@Injectable()
export class MessageService extends GenericService<Message> {

    public async create(model: Message): Promise<void> {

    }

    public async update(model: Message): Promise<void> {

    }
    
}