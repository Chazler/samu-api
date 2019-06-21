import { Controller, Get, Param } from '@nestjs/common';
import { MessageService } from 'src/service/message/message.service';

@Controller('message')
export class MessageController {

    constructor(readonly repository: MessageService) {
        
    }
}