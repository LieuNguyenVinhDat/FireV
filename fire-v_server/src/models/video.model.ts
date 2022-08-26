import { User } from "./user.model";

export interface Video {
    title: string;
    views: number;
    author: User;
    comment: Comment[];
    url: string;
    image_url: string;
    description: string;
    like: number;
    dislike: number;
    tags: string[];
 }