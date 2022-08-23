import { UploadModule } from './upload/upload.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { VideoModule } from './video/video.module';

import { MongooseModule } from '@nestjs/mongoose';
import databaseConfig from './configs/database.config';
import { UserController } from './user/user.controller';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [
    MongooseModule.forRoot(databaseConfig().appDatabase),
    UserModule, 
    VideoModule, 
    CommentModule, 
    UploadModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
