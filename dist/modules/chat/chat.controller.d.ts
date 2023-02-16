import { ChatService } from './chat.service';
export declare class ChatController {
    private readonly chatService;
    constructor(chatService: ChatService);
    addChatMessage(id: string, messageData: {
        msg: string;
        uid: string;
    }): Promise<FirebaseFirestore.WriteResult>;
    getUsers(): void;
    getMessages(): any;
}
