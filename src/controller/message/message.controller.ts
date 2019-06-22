import { Controller, Get, Param, Post, HttpCode, Body } from '@nestjs/common';
import { MessageService } from 'src/service/message/message.service';
import CreateMessageDto from 'src/dto/message/create-message-dto';
import { Message } from 'src/entity/message.entity';
import { User } from 'src/entity/user.entity';
import DeleteMessageDto from 'src/dto/message/delete-message-dto';

@Controller('message')
export class MessageController {

    constructor(readonly messageService: MessageService) {

    }

    @Post()
    @HttpCode(201)
    async create(@Body() body: CreateMessageDto) {
        const message = new Message(body.title, body.content, null, Date.now(), body.tags);
    
        this.messageService.create(message);
    }

    @Post()
    async delete(@Body() body: DeleteMessageDto) {
        
    }
}