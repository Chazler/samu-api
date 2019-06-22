import { Controller, Get, Param, Post, HttpCode, Body, Put } from '@nestjs/common';
import { MessageService } from 'src/service/message/message.service';
import CreateMessageDto from 'src/dto/message/create-message-dto';
import { Message } from 'src/entity/message.entity';
import { User } from 'src/entity/user.entity';
import DeleteMessageDto from 'src/dto/message/delete-message-dto';
import EditMessageDto from 'src/dto/message/edit-message-dto';

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
    @HttpCode(200)
    async delete(@Body() body: DeleteMessageDto) {
        var message = await this.messageService.readOne(body.messageId);

        message.active = false;
        message.deletionReason = body.reason;

        this.messageService.update(message);
    }

    @Put()
    @HttpCode(200)
    async edit(@Body() body: EditMessageDto) {
        var message = await this.messageService.readOne(body.messageId);
        message.title = body.title;
        message.content = body.content;
        message.tags = body.tags;

        this.messageService.update(message);
    }
}