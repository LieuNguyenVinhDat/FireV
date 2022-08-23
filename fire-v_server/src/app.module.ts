
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { VideoModule } from './video/video.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentModule } from './comment/comment.module';
import { UploadModule } from './upload/upload.module';
import databaseConfig from './configs/database.config';



@Module({
  imports: [
    MongooseModule.forRoot(databaseConfig().appDatabase),
    UserModule, 
    VideoModule, CommentModule, UploadModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
