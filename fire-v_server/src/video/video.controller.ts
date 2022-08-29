import { Controller, Get, Post, Body, Query, Delete, Req, Res, StreamableFile, Param } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';
import { AuthService } from 'src/middleware/auth/auth.service';
import { Video } from 'src/schemas/video.schema';
import { VideoService } from './video.service';
import type { Response } from 'express';

@Controller('video')
export class VideoController {
  constructor(private readonly videoService: VideoService,private authService: AuthService) {}
  
  @Post('send')
  public async createVideoInfo(@Body()video:Video, @Req() req: any){
      console.log('di vo day');
      return await this.videoService.creatVideo(video,req.user);
  }

  @Get('play')
  public async getVideoByid(@Query('id') id: string){
    console.log(id);
      return await this.videoService.findByVideoId(id);
  }

  @Get('play/test')
  getFile(@Query('path') path: string): StreamableFile {
    console.log(path)
    const file = createReadStream(join(process.cwd(), path));
    console.log(file);
    return new StreamableFile(file);
  }

  @Get('all')
  public async getAllVideo(){
    return await this.videoService.findAllVideo();
  }


}