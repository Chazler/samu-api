import { ApiModelProperty } from "@nestjs/swagger";
import { MaxLength } from "class-validator";
import { Tag } from "src/entity/tag.entity";

export default class EditMessageDto {

    @ApiModelProperty({ required: true })
    messageId: number;

    @ApiModelProperty({ required: true, maxLength: 128 })
    @MaxLength(128)
    title: string;

    @ApiModelProperty({ required: true })
    content: string;

    @ApiModelProperty({ required: false })
    tags: Tag[];

}