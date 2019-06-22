import { ApiModelProperty } from "@nestjs/swagger";
import { MaxLength } from "class-validator";

export default class DeleteMessageDto {

    @ApiModelProperty({ required: true })
    messageId: number;

    @ApiModelProperty({ required: true })
    reason: string;
}