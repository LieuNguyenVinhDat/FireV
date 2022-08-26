import { catchError, map, switchMap, from, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { FileUploadService } from '../services/file-upload.service';
import * as UploadImageActions from '../actions/uploadImage.action';
import { Actions, createEffect, ofType } from '@ngrx/effects';

@Injectable()
export class UploadImageEffect {
  constructor(
    private actions$: Actions,
    private fileUploadService: FileUploadService
  ) {}

  uploadImage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UploadImageActions.uploadImage),
      switchMap((action) =>
        this.fileUploadService.uploadFile(action.files)
      ),
      map((filepath) => UploadImageActions.uploadImageSucceed({ filepath })),
      catchError((error) => {
        return of(UploadImageActions.uploadImageFailed({ error: error }));
      })
    )
  );
}
