import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true
})
export class User {
  @Prop({
    required: true,
  })
  name: string;
  
  @Prop({
    default: '', //default image
  })
  avatar: string;

  @Prop({ default: 0 })
  subscribers: number;
}
export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);