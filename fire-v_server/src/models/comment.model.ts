import { User } from "./user.model";

export interface Comment {
    content: string;
    author: User;
    // date: Date;
    id_Video: string;
}