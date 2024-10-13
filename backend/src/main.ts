import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AxiosHttpExceptionFilter } from './@common/filters/axios-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AxiosHttpExceptionFilter());
  await app.listen(8080);
}
bootstrap();
