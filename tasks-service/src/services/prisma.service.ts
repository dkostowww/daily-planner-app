import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient, Prisma } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient<Prisma.PrismaClientOptions, 'error'> implements OnModuleInit {
	constructor() {
		try {
			super();
		} catch (err) {
			console.log(err);
		}
	}

	async onModuleInit() {
		this.$on('error', (event) => {
			console.log(event.target);
		});
		try {
			await this.$connect();
		} catch (e) {
			console.log(e);
		}
	}
}