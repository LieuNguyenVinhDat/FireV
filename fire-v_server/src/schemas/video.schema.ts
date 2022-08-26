import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from "./user.schema";
import { Document } from 'mongoose';


@Schema({
    timestamps: true
})

export class Video {

    @Prop()
    title: string;

    @Prop({default: 0})
    views: number;

    @Prop()
    author: User;

    @Prop()
    comment: Comment[]

    @Prop()
    url: string;

    @Prop()
    image_url: string;

    @Prop()
    description: string;

    @Prop({ default: 0})
    like: number;

    @Prop({ default: 0})
    dislike: number;

    @Prop()
    tags: string[];
}
export type VideoDocument = Video & Document;
export const VideoSchema = SchemaFactory.createForClass(Video);