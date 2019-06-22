import { IsNotEmpty, Max, IsDate, MaxLength } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { Tag } from '../../entity/tag.entity';

export default class CreateMessageDto {

    @ApiModelProperty({ required: true, maxLength: 128 })
    @MaxLength(128)
    title: string;

    @ApiModelProperty({ required: true })
    content: string;

    @ApiModelProperty({ required: false })
    tags: Tag[];

    @ApiModelProperty({required: true, format: 'datetime'})
    @IsNotEmpty()
    created: Date;
}