import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { CommissionService } from '../../service/commission/commission.service';
import { Commission } from '../../entity/Commission.entity';
import { ApiUseTags } from '@nestjs/swagger';
import { CreateCommissionDto } from '../../dto/commission/create-commission-dto';

@ApiUseTags('Commissions')
@Controller('commissions')
export class CommissionController {
    constructor(private readonly commisionService: CommissionService) {
    }

    @Post()
    @HttpCode(201)
    async create(@Body() body: CreateCommissionDto) {
        const commission = new Commission(body.name, body.description, body.created);
        this.commisionService.create(commission);
        return { TBD: 'TBD' };
    }
}
