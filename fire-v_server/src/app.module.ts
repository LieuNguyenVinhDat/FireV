import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { VideoModule } from './video/video.module';
import { CommentModule } from './comment/comment.module';
import { MongooseModule } from '@nestjs/mongoose';
import databaseConfig from './configs/database.config';
import { UserController } from './user/user.controller';

@Module({
  imports: [
    MongooseModule.forRoot(databaseConfig().appDatabase),
    UserModule, 
    VideoModule, 
    // CommentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
