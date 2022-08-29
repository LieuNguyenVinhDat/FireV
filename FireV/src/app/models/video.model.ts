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
<<<<<<< HEAD
    author: User;
=======
    owner: User;
>>>>>>> 98b5689088397cb4c757f0c351468177aa35c7b4
    createdAt: string;
    hour: number;
    minute: number;
    second: number;
    day: number;
    comments: Comment[];
    isHidden: boolean;
    hashtags: string[];
<<<<<<< HEAD
    likeList: User[];
    type: string;
}
=======
    likeList: User[]; 
    type: string;                  
}
>>>>>>> 98b5689088397cb4c757f0c351468177aa35c7b4
