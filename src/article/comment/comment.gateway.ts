import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WsResponse,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Socket, Server } from 'socket.io';

@WebSocketGateway()
export class CommentGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  private logger: Logger = new Logger('CommentGateway');
  afterInit(server: Server) {
    this.logger.log('Comments socket is connected');
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`${client.id} disconnected`);
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`${client.id} connected`);
  }

  @SubscribeMessage('msgToServer')
  handleMessage(client: any, text: string): WsResponse<string> {
    this.logger.log(`msg: ${text}`);
    client.emit('msgToClient', text);
    return { event: 'msgToClient', data: text };
  }

  @SubscribeMessage('deleteComment')
  handleDeleteComment(client: any, text: string): WsResponse<string> {
    client.broadcast.emit('deleteMsgToClient', text);
    return { event: 'deleteMsgToClient', data: text };
  }
}
