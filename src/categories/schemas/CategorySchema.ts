import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import softDeletes from '../../mongoose/plugins/SoftDeletes';

/*====================*/

export type CategoryDocument = Category & Document;

/*====================*/

@Schema({ versionKey: false })
export class Category {
  @Prop({ required: true, unique: true, minlength: 3, maxlength: 16 })
  public name: string;
}

/*====================*/

export const CategorySchema = SchemaFactory.createForClass(Category);

CategorySchema.plugin(softDeletes);
