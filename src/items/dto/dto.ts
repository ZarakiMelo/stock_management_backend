import { IsString, IsNumber } from 'class-validator';

/**
 * DTO (Data Transfer Object) pour la création d'un article.
 * Ce DTO est utilisé pour valider les données envoyées lors de la création d'un nouvel article.
 */
export class CreateItemDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly category: string;

  @IsString()
  readonly size: string;

  @IsString()
  readonly color: string;

  @IsNumber()
  readonly quantity: number;

  @IsNumber()
  readonly price: number;
}

/**
 * DTO (Data Transfer Object) pour la mise à jour d'un article.
 * Ce DTO est utilisé pour valider les données envoyées lors de la mise à jour d'un article existant.
 * Les propriétés sont facultatives car il est possible de ne mettre à jour qu'une partie de l'article.
 */
export class UpdateItemDto {
  @IsString()
  readonly name?: string;

  @IsString()
  readonly category?: string;

  @IsString()
  readonly size?: string;

  @IsString()
  readonly color?: string;

  @IsNumber()
  readonly quantity?: number;

  @IsNumber()
  readonly price?: number;
}
