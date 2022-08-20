import { Controller, Get, Post, Body, Delete, Query } from '@nestjs/common';
import { Comment } from 'src/schemas/comment.schema';
import { CommentService } from './comment.service';

@Controller('comment')
export class CommentController {
  constructor(private commentService: CommentService) {}
@Post('send')
public async sendUser(@Body()comment: Comment){
  return await this.commentService.create(comment);
}
@Get('/')
public async get(@Query('from')fromId:string, @Query('to')toId:string){
    return await this.commentService.findByUserId(fromId,toId);
}
@Delete('delete')
public async delete(@Query('from')fromId:string, @Query('to')toId:string){
    return await this.commentService.findByUserId(fromId,toId);
}

}