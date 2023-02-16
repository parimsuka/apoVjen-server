import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ChatService } from './chat.service';
import { getFirestore } from 'firebase-admin/firestore';

var admin = require('firebase-admin');

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post(':id')
  async addChatMessage(@Param('id') id: string, @Body() messageData: {msg: string, uid: string}) {
    const time = admin.firestore.FieldValue.serverTimestamp();
    return getFirestore().collection('messages').doc(id).update({messages: admin.firestore
                                      .FieldValue
                                      .arrayUnion(
                                      {
                                        msg: messageData.msg,
                                        from: messageData.uid,
                                        createdAt: time
                                      })
                              });
  }

  @Get('users')
  getUsers() {
    //return getFirestore().collection('users').valueChanges({idField: 'uid'});
  }

  @Get('messages')
  getMessages() {
    return admin.firestore.collection('messages', ref => ref.orderBy('createdAt')).valueChanges({idField: 'id'});
  }
}
