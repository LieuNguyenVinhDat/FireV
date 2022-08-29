import { createVideoSucceed } from './../actions/video.action';
<<<<<<< HEAD
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
=======
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AddVideoService } from "../services/add-video.service";
import * as VideoActions from "../actions/video.action";
import { from, switchMap, of, map, catchError } from 'rxjs';
@Injectable()
export class VideoEffect {
  constructor(private actions$: Actions, private addVideoService: AddVideoService) {}
>>>>>>> 98b5689088397cb4c757f0c351468177aa35c7b4
  uploadVideo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VideoActions.createVideo),
      switchMap((action) => {
<<<<<<< HEAD
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
        // for(let vid of video){

        // }
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
=======
        return this.addVideoService.createVideo(action.video,action.idToken);
      }),
      map((video) => VideoActions.createVideoSucceed({ video })),
      catchError((error) => of(VideoActions.createVideoFailed({ error: error })))
    ));
>>>>>>> 98b5689088397cb4c757f0c351468177aa35c7b4
}
