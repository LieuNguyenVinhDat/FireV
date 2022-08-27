import { User } from "./user.model";
import { Comment } from "./comment.model";

export interface Video{
    _id : string;
    title: string;
    description: string;
    image_url: string;
    url: string;
    likes: number;
    dislikes: number;
    views: number;
    owner: User;
    createdAt: string;
    hour: number;
    minute: number;
    second: number;
    day: number;
    comments: Comment[];
    isHidden: boolean;
    hashtags: string[];
    likeList: User[]; 
    type: string;                  
}