import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// Définition du type ItemDocument qui est une combinaison de l'interface Item et de la classe Document de Mongoose.
export type ItemDocument = Item & Document;

// Utilisation du décorateur @Schema() pour définir une classe de schéma Mongoose
@Schema()
export class Item {
  // Définition des propriétés du schéma avec le décorateur @Prop()
  // Chacune de ces propriétés est requise dans les documents de la collection Items

  /**
   * Nom de l'article
   */
  @Prop({ required: true })
  name: string;

  /**
   * Catégorie de l'article
   */
  @Prop({ required: true })
  category: string;

  /**
   * Taille de l'article
   */
  @Prop({ required: true })
  size: string;

  /**
   * Couleur de l'article
   */
  @Prop({ required: true })
  color: string;

  /**
   * Quantité de l'article en stock
   */
  @Prop({ required: true })
  quantity: number;

  /**
   * Prix de l'article
   */
  @Prop({ required: true })
  price: number;
}

// Création du schéma Mongoose à partir de la classe Item
export const ItemSchema = SchemaFactory.createForClass(Item);
