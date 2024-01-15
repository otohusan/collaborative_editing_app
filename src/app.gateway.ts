import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: 'http://localhost:5173',
    credentials: true,
  },
})
export class ArticlesGateway {
  @WebSocketServer()
  server: Server;

  notifyArticleUpdated(articleData: {
    article_id: number;
    article_text: string;
  }) {
    this.server.emit('articleUpdated', articleData);
  }
}
