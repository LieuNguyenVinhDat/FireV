import { User } from "./user.model";

export interface Comment{
    _id: string;
    content: string;
    replyTo: Comment;
    user: User;
    createdAt: string;
    commentList: Comment[];
    isHidden: boolean;
}