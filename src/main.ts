import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors'; // Importer cors

console.log("New app")
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Configuration CORS
  app.use(cors({
    origin: 'http://localhost:4200', // Autoriser uniquement les requêtes provenant de localhost:4200
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Méthodes HTTP autorisées
    allowedHeaders: ['Content-Type', 'Authorization'], // En-têtes autorisés
  }));
  
  await app.listen(3000);
}
bootstrap();
