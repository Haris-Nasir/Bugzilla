import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // Ensures that DTOs are properly transformed
      whitelist: true, // Strips out non-decorated properties
      forbidNonWhitelisted: true, // Throws an error if any non-whitelisted fields are passed
      disableErrorMessages: false, // Enable error messages for validation failure
    }),
  );
  app.enableCors({
    origin: 'http://localhost:5173', // Replace with your frontend URL
    credentials: true, // Allow cookies or Authorization headers
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', // Specify allowed methods
    allowedHeaders: 'Content-Type, Accept, Authorization', // Specify allowed headers
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
