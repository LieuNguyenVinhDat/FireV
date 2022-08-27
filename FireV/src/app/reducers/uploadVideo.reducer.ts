import { createReducer, on } from '@ngrx/store';
import { UploadVideoState } from '../states/uploadVideo.state';
import * as UploadVideoActions from '../actions/uploadVideo.action';
import { ApplicationModule } from '@angular/core';
const initialState: UploadVideoState = {
  fileUp: <File>{},
  filepath: '',
  error: '',
  isSuccess: false,
  isLoading: false,
  idToken: '',
};

export const uploadVideoReducer = createReducer(
  initialState,
  on(UploadVideoActions.uploadVideos, (state, action) => {
    let newState =  {
      ...state,
      isLoading: true,
      fileUp: action.files,
      idToken: action.idToken
    }
    console.log(action.type,newState);
    return newState;
  }),
  on(UploadVideoActions.uploadVideoSucceed, (state, action) => {
    let newState = {
      ...state,
      filepath: action.filepath,
      isLoading: false,
      isSuccess: true,
    }
    console.log(action.type);
    return newState;
  }),
  on(UploadVideoActions.uploadVideoFailed, (state,action) => {
    let newState = {
      ...state,
      error: action.error,
      isLoading: false,
    }
    console.log(newState.error);
    return newState;
  })
);
