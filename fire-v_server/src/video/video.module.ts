import { Module } from '@nestjs/common';
import { VideoService } from './video.service';
import { VideoController } from './video.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Video, VideoSchema } from 'src/schemas/video.schema';
import { forwardRef } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { UserSchema } from 'src/schemas/user.schema';
import { AuthService } from 'src/middleware/auth/auth.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'video', schema: VideoSchema }]),
    MongooseModule.forFeature([{ name: 'user', schema: UserSchema }]),    
    forwardRef(() => UserModule),
  ],
  controllers: [VideoController],
  providers: [VideoService,AuthService],
})
export class VideoModule {}
