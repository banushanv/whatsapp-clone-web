import type MessageModel from "./MessageModel";

export default class ChatsModel {
    sub1!: string;
    id!: string;
    sub2!:string;
    sub1HasViewed!: string;
    sub2HasViewed!: boolean;
    messages!: MessageModel[];
}