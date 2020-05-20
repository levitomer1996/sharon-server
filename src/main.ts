import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';

async function bootstrap() {
  const serverConfig = config.get('server');
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 8080;
  app.enableCors();
  await app.listen(port);
}
bootstrap();
