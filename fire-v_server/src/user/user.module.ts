import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/schemas/user.schema';
import { VideoModule } from 'src/video/video.module';
import { forwardRef } from '@nestjs/common';
import { VideoSchema } from 'src/schemas/video.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'user', schema: UserSchema}]),
    MongooseModule.forFeature([{ name: 'video', schema: VideoSchema }]),    
    forwardRef(() => VideoModule),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports:[UserService]
})
export class UserModule {}
