import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from './user.schema';


@Schema({
  timestamps: true
})
export class Comment {
   @Prop()
  content: string;

  @Prop()
  author: User;

  // @Prop()
  // date: Date;

  @Prop()
  id_Video: string;
  
}
export type CommentDocument = Comment & Document;
export const CommentSchema = SchemaFactory.createForClass(Comment);