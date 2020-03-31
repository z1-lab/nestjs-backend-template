import './module-alias';
import dotenv from 'dotenv';
dotenv.config();

import { NestFactory } from '@nestjs/core';
import {
  NestFastifyApplication,
  FastifyAdapter,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { configureApp } from './config';
import { INestApplication } from '@nestjs/common';

async function bootstrap(): Promise<void> {
  let app: INestApplication = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  app = configureApp(app);

  const config = app.get(ConfigService);
  const port = parseInt(config.get<string>('PORT', '3000'), 10);

  await app.listen(port, '0.0.0.0');
}

bootstrap();
