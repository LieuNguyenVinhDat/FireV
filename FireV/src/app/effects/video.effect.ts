import { createVideoSucceed } from './../actions/video.action';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AddVideoService } from '../services/add-video.service';
import * as VideoActions from '../actions/video.action';
import { from, switchMap, of, map, catchError } from 'rxjs';
@Injectable()
export class VideoEffect {
  constructor(
    private actions$: Actions,
    private addVideoService: AddVideoService
  ) {}

  uploadVideo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VideoActions.createVideo),
      switchMap((action) => {
        return this.addVideoService.createVideo(action.video, action.idToken);
      }),
      map((video) => VideoActions.createVideoSucceed({ video })),
      catchError((error) =>
        of(VideoActions.createVideoFailed({ error: error }))
      )
    )
  );
  getVideo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VideoActions.getVideo),
      switchMap(() => {
        return this.addVideoService.getVideo();
      }),
      map((video) => {
        video.forEach(async video => {
          let total = new Date().getTime() - new Date(video.createdAt).getTime();
          // let timeUp = 0;
          video.hour = Math.round((Math.floor((total) / 1000)) / 3600);
          video.minute = Math.round((Math.floor((total) / 1000)) / 60);
          video.second = Math.round((Math.floor((total) / 1000)));
          video.day = Math.round((Math.floor((total) / 1000)) / 86400);
          // if(video.hour > 0 ){
          //   timeUp = video.hour;
          // }
          // else if(video.minute > 0 && video.minute < 60 && video.hour == 0){
          //   timeUp = video.minute;
          // }
          // else if(video.second > 0 && video.second < 60 && video.minute == 0 && video.hour == 0){
          //   timeUp = video.second;
          // }
          // else if (video.hour > 24){
          //   timeUp = total;
          // }
        });
        return VideoActions.getVideoSucceed({ video });
      }),
      catchError((error) => of(VideoActions.getVideoFailed({ error: error })))
    )
  );
  getVideoById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VideoActions.getVideoById),
      switchMap((action) => {
        return this.addVideoService.getVideoByIdDb(action.id);
      }),
      map((video) => {
        return VideoActions.getVideoByIdSucceed({ video });
      }),
      catchError((error) =>
        of(VideoActions.getVideoByIdFailed({ error: error }))
      )
    )
  );
  getAllVideoExceptId$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VideoActions.getAllExceptId),
      switchMap((action) => {
        return this.addVideoService.getAllExceptId(action.id);
      }),
      map((video) => {
        return VideoActions.getAllExceptIdSucceed({ video });
      }),
      catchError((error) =>
        of(VideoActions.getAllExceptIdFailed({ error: error }))
      )
    )
  );
}
