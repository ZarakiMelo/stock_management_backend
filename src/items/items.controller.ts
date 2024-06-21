import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto, UpdateItemDto } from './dto/dto';
import { Item } from './schemas/schema';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  // Récupère tous les items
  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  // Récupère un item par son ID
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Item> {
    return this.itemsService.findOne(id);
  }

  // Crée un nouvel item
  @Post()
  async create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemsService.create(createItemDto);
  }

  // Met à jour un item par son ID
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto): Promise<Item> {
    return this.itemsService.update(id, updateItemDto);
  }

  // Supprime un item par son ID
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Item> {
    return this.itemsService.delete(id);
  }
}
