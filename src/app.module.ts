import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from 'nestjs-config';
import * as path from 'path';
import { CommissionController } from './controller/commission/commission.controller';
import { CommissionService } from './services/commission/commission.service';
import { MessageController } from './controllers/message/message.controller';
import { MessageService } from './services/message/message.service';

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