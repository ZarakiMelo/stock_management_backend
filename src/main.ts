import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors'; // Importation du module cors pour la gestion des CORS

console.log("New app")

async function bootstrap() {
  // Création de l'application Nest.js avec le module racine AppModule
  const app = await NestFactory.create(AppModule);

  // Configuration des CORS (Cross-Origin Resource Sharing)
  app.use(cors({
    origin: 'http://localhost:4200', // Autorisation des requêtes provenant de http://localhost:4200
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Méthodes HTTP autorisées
    allowedHeaders: ['Content-Type', 'Authorization'], // En-têtes autorisés
  }));
  
  // Démarrage de l'application et écoute sur le port 3000
  await app.listen(3000);
}

// Appel de la fonction bootstrap pour lancer l'application
bootstrap();
