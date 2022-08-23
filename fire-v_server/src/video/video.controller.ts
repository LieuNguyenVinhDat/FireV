import { Controller, Get, Post, Body, Query, Delete } from '@nestjs/common';

import { Video } from 'src/models/video.model';
import { VideoService } from './video.service';

@Controller('video')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}
  @Post('/send')
  public async createUser(@Body()video:Video){
      return await this.videoService.creatVideo(video);
  }

  @Get('/')
  public async getVideoByid(@Query(`id`) id: string){
      return await this.videoService.findByVideoId(id);
  }

  @Get('all')
  public async getAllVideo(){
    return await this.videoService.findAllVideo();
  }

  @Delete('/delete')
  public async deleteVideo(@Query(`id`) id: string){
    return await this.videoService.deleteVideo(id);
  }
}