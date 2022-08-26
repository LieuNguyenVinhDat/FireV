import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserDocument } from 'src/schemas/user.schema';

import {
    Video,
    VideoDocument,

} from "src/schemas/video.schema";

@Injectable()
export class VideoService {
    constructor(
        @InjectModel('video') private videoModel: Model<VideoDocument>,
        @InjectModel('user') private userModel: Model<UserDocument>
    ) { }

    async creatVideo(video: Video) {
        let creatVideo = new this.videoModel(video);
        await creatVideo.save();
    }

    async findByVideoId(id: string) {
        return await this.videoModel.findById('id');
    }

    async findAllVideo() {
        return await this.videoModel.find();
    }

    async deleteVideo(id: string) {
        return await this.videoModel.findByIdAndDelete(id);
    }
    async delete(id: string) {
        return await this.videoModel.deleteMany();
    }

}
