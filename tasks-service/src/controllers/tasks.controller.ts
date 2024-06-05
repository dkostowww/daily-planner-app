import { Controller, Get, Param, Query } from '@nestjs/common';
import { TasksService } from '../services/tasks.service';
import { Task, Prisma } from '@prisma/client';

@Controller('tasks')
export class TasksController {
	constructor(private readonly tasksService: TasksService) {}

	@Get('/:taskId')
	async getTask(@Param('taskId') taskId: number): Promise<Task | null> {
		return this.tasksService.getTask({ id: Number(taskId) });
	}

	@Get('all/:dayId')
	async getAllTasks(@Param('dayId') dayId: number): Promise<Task[] | []> {
		return this.tasksService.getAllTasks({ dayId: Number(dayId)});
	}
}
