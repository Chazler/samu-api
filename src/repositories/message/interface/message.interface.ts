import { Message } from "src/entities/message";
import { GenericRepository } from "src/repositories/base/repository.interface";

export class IMessageRepository implements GenericRepository<Message> {

    create(item: Message): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    update(id: string, item: Message): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    find(item: Message): Promise<Message[]> {
        throw new Error("Method not implemented.");
    }
    
    findOne(id: string): Promise<Message> {
        throw new Error("Method not implemented.");
    }


}