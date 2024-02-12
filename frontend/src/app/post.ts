import { User } from "./user";

export class Post {
    id!:number;
    title!:string;
    content!:string;
    imageurl!:string;
    date!:Date;
    user!:User;
}
