import { createReducer, on } from '@ngrx/store';
import { UploadVideoState } from '../states/uploadVideo.state';
import * as UploadVideoActions from '../actions/uploadVideo.action';
const initialState: UploadVideoState = {
  fileUp: <File>{},
  filepath: '',
  error: '',
  isSuccess: true,
  isLoading: false,
};

export const uploadVideoReducer = createReducer(
  initialState,
  on(UploadVideoActions.uploadVideos, (state, action) => {

    let newState =  {
      ...state,
      isLoading: true,
      fileUp: action.files,
    }
    console.log(newState);
    return newState;
  }),
  on(UploadVideoActions.uploadVideoSucceed, (state, action) => {
    let newState = {
      ...state,
      filepath: action.filepath,
      isLoading: false,
      isSuccess: true,
    }
    console.log(newState);
    return newState;
  }),
  on(UploadVideoActions.uploadVideoFailed, (state,action) => {
    let newState = {
      ...state,
      error: action.error,
      isLoading: false,
      isSuccess: false,
    }
    console.log(newState.error);
    return newState;
  })
);
