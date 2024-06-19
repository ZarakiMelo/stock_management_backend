import { IsString, IsNumber } from 'class-validator';

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
