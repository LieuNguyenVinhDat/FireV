import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import {
    Comment,
    CommentDocument,
  
  } from "src/schemas/comment.schema";
  import { Comment as CommentModel } from "../schemas/comment.schema";

@Injectable()
export class CommentService {
    constructor(
        @InjectModel(Comment.name) private CommentModel: Model<CommentDocument>){}
      async create(comment: CommentModel) {
       
        let createComment = new this.CommentModel(comment);
        await createComment.save();
      }
      async findAll() {
        return await this.CommentModel.find().exec();
      }
      async findByUserId(fromUserId: string, toUserID: string) {
        return await this.CommentModel
          .find({
            $or: [
              { user: fromUserId, toUser: toUserID },
            ],
          })
          .exec();
}
}