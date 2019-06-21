import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from 'nestjs-config';
import * as path from 'path';
import { MessageController } from './controller/message/message.controller';
import { CommissionController } from './controller/commission/commission.controller';
import { CommissionService } from './service/commission/commission.service';
import { MessageService } from './service/message/message.service';

// ConfigService.rootPath = path.resolve(__dirname, '..');

@Module({
  imports: [
    ConfigModule.load(path.resolve(__dirname, 'config', '**/!(*.d).{ts,js}')),
    TypeOrmModule.forRootAsync({
        useFactory: (config: ConfigService) => config.get('db'),
        inject: [ConfigService],
    }),
  ],
  controllers: [CommissionController, MessageController],
  providers: [CommissionService, MessageService],
})
export class AppModule {}