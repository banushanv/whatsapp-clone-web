import type MessageModel from "./MessageModel";
import type UserModel from "./UserModel";

export default class UserWithChatModel {
    sub1!: string;
    id!: string;
    sub2!:string;
    sub1HasViewed!: string;
    sub2HasViewed!: boolean;
    messages!: MessageModel[];
    user!: UserModel;
}