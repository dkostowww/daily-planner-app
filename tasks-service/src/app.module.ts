import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TasksController } from './controllers/tasks.controller';
import { PrismaService } from './services/prisma.service';
import { TasksService } from './services/tasks.service';

@Module({
	imports: [ConfigModule.forRoot()],
	controllers: [TasksController],
	providers: [PrismaService, TasksService]
})
export class AppModule {}
