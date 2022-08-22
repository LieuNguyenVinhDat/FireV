import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import {
    Video,
    VideoDocument,
  
  } from "src/schemas/video.schema";
  import { Video as VideoModel } from "../models/video.model";

@Injectable()
export class VideoService {
    constructor(@InjectModel(Video.name)private videoModel: Model<VideoDocument>){}

    async creatVideo(video: VideoModel){
        let creatVideo = new this.videoModel(video);
        await creatVideo.save();
    }

    async findByVideoId(id:string){
        return await this.videoModel.findById('id');
    }

    async findAllVideo(){
        return await this.videoModel.find();
    }

    async deleteVideo(id:string){
        return await this.videoModel.findByIdAndDelete(id);
    }
    async delete(id:string){
        return await this.videoModel.deleteMany();
    }

}
