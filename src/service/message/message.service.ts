import { Injectable } from "@nestjs/common";
import GenericService from "../base/generic.service";
import { Message } from "../../entity/message.entity";

@Injectable()
export class MessageService extends GenericService<Message> {

    public async create(model: Message): Promise<void> {

    }

    public async update(model: Message): Promise<void> {

    }
    
}