import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from 'src/schemas/user.schema';

import {
    Video,
    VideoDocument,

} from "src/schemas/video.schema";

@Injectable()
export class VideoService {
    constructor(
        @InjectModel(Video.name) private videoModel: Model<VideoDocument>,
        @InjectModel(User.name) private userModel: Model<UserDocument>
    ) { }

    async creatVideo(video: Video, user: any) {
        try {
            const newVideo = new this.videoModel(video);
            const user_Indb = await this.userModel.findOne({
                email: user.email,
            }).exec();
            newVideo.author = user_Indb._id;
            const _video = await newVideo.save();
            return _video;
        } catch (err) {
            console.log(err);
        }
    }

    async findByVideoId(id: string) {
<<<<<<< HEAD
        return await this.videoModel.findById(id)
        .populate('author', 'email avatar _id name subscribers',this.userModel);
    }

    async findAllVideo() {
        return await this.videoModel
        .find({})
        .select('-description -likeList -dislikeList -__v -like -dislike -hashtags -url') 
        .populate('author', 'email avatar _id name subscribers',this.userModel);
=======
        return await this.videoModel.findById('id');
    }

    async findAllVideo() {
        return await this.videoModel.find();
>>>>>>> 98b5689088397cb4c757f0c351468177aa35c7b4
    }

    async deleteVideo(id: string) {
        return await this.videoModel.findByIdAndDelete(id);
    }
    async delete(id: string) {
        return await this.videoModel.deleteMany();
    }

}
