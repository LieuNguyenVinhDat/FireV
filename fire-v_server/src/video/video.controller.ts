import { Controller, Get, Post, Body, Query, Delete, Req } from '@nestjs/common';
import { AuthService } from 'src/middleware/auth/auth.service';
import { Video } from 'src/schemas/video.schema';
import { VideoService } from './video.service';

@Controller('video')
export class VideoController {
  constructor(private readonly videoService: VideoService,private authService: AuthService) {}
  
  @Post('send')
  public async createVideoInfo(@Body()video:Video, @Req() req: any){
      console.log('di vo day');
      return await this.videoService.creatVideo(video,req.user);
  }

  @Get('/')
  public async getVideoByid(@Query(`id`) id: string){
      return await this.videoService.findByVideoId(id);
  }

  @Get('all')
  public async getAllVideo(){
    return await this.videoService.findAllVideo();
  }

  @Delete('delete')
  public async deleteVideo(@Query(`id`) id: string){
    return await this.videoService.deleteVideo(id);
  }
}