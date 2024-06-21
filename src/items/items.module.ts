import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { Item, ItemSchema } from './schemas/schema';

// Définition du module ItemsModule
@Module({
  // Importation du module Mongoose avec la définition du schéma pour la collection Items
  // Le schéma est associé à l'entité Item
  imports: [MongooseModule.forFeature([{ name: Item.name, schema: ItemSchema }])],
  
  // Déclaration des services utilisés par le module
  providers: [ItemsService],
  
  // Déclaration des contrôleurs utilisés par le module
  controllers: [ItemsController],
})
export class ItemsModule {}
