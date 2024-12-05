import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS and allow the frontend origin
  app.enableCors({
    origin: 'http://localhost:5173', // Specify the allowed origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed HTTP methods
    credentials: true, // Allow credentials (cookies, etc.)
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
