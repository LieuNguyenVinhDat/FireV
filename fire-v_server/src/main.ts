import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const sv = 5000;
  const app = await NestFactory.create(AppModule);
  await app.listen(sv);
  console.log(`sever is running on: http://127.0.0.1:${sv}/`)

}
bootstrap();
