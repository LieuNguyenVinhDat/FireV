import { User } from 'src/schemas/user.schema';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({
    timestamps: true
})
export class Comment {
     @Prop()
    content: string;
 
    @Prop()
    author: User;

    @Prop()
    date: Date;

    @Prop()
    id_Video: string;
    
}
export type CommentDocument = Comment & Document;
export const CommentSchema = SchemaFactory.createForClass(Comment);