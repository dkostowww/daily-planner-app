import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
	const port = configService.get('PORT', '3000');

	app.enableShutdownHooks();
	app.enableCors();
	app.useGlobalPipes(new ValidationPipe());
  
	await app.listen(port);
	console.log(`Tasks service is working on port: ${port}!`);
}
bootstrap();
