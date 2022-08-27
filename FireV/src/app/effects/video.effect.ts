import { createVideoSucceed } from './../actions/video.action';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AddVideoService } from "../services/add-video.service";
import * as VideoActions from "../actions/video.action";
import { from, switchMap, of, map, catchError } from 'rxjs';
@Injectable()
export class VideoEffect {
  constructor(private actions$: Actions, private addVideoService: AddVideoService) {}
  uploadVideo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VideoActions.createVideo),
      switchMap((action) => {
        return this.addVideoService.createVideo(action.video,action.idToken);
      }),
      map((video) => VideoActions.createVideoSucceed({ video })),
      catchError((error) => of(VideoActions.createVideoFailed({ error: error })))
    ));
}