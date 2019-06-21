import { Controller, Get, Param } from '@nestjs/common';
import { IMessageRepository } from 'src/repositories/message/interface/message.interface';

@Controller('message')
export class MessageController {

    constructor(readonly repository: IMessageRepository) {
        
    }


}