import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Task, Prisma } from '@prisma/client';

@Injectable()
export class TasksService {
	constructor(private readonly prismaService: PrismaService) {}

	async getTask(where: Prisma.TaskWhereUniqueInput): Promise<Task | null> {
		return this.prismaService.task.findUnique({
			where
		});
	}

	getAllTasks(where: Prisma.TaskWhereInput): Promise<Task[] | []> {
		return this.prismaService.task.findMany({
			where
		});
	}

	createTask(): boolean {
		return true;
	}

	updateTask(): boolean{
		return true;
	}

	deleteTask(): boolean {
		return true;
	}
}
