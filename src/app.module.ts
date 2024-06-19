import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:5uqqs6kgxy47sicB@cluster0.zrpv18h.mongodb.net/stock-management'), // Replace with your MongoDB URI
    ItemsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
