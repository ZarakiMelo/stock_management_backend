import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item, ItemDocument } from './schemas/schema';
import { CreateItemDto } from './dto/dto';
import { UpdateItemDto } from './dto/dto';

@Injectable()
export class ItemsService {
  constructor(@InjectModel(Item.name) private itemModel: Model<ItemDocument>) {}

  /**
   * Retrieves all items from the database.
   * @returns An array of all items.
   */
  async findAll(): Promise<Item[]> {
    return this.itemModel.find().exec();
  }

  /**
   * Retrieves a single item by its ID.
   * @param id - The ID of the item to retrieve.
   * @returns The item with the specified ID.
   */
  async findOne(id: string): Promise<Item> {
    return this.itemModel.findById(id).exec();
  }

  /**
   * Creates a new item in the database.
   * @param createItemDto - The data transfer object containing the new item's details.
   * @returns The created item.
   */
  async create(createItemDto: CreateItemDto): Promise<Item> {
    const createdItem = new this.itemModel(createItemDto);
    return createdItem.save();
  }

  /**
   * Updates an existing item in the database.
   * @param id - The ID of the item to update.
   * @param updateItemDto - The data transfer object containing the item's updated details.
   * @returns The updated item.
   */
  async update(id: string, updateItemDto: UpdateItemDto): Promise<Item> {
    return this.itemModel.findByIdAndUpdate(id, updateItemDto, { new: true }).exec();
  }

  /**
   * Deletes an item from the database.
   * @param id - The ID of the item to delete.
   * @returns The deleted item.
   */
  async delete(id: string): Promise<Item> {
    return this.itemModel.findByIdAndDelete(id).exec();
  }
}
