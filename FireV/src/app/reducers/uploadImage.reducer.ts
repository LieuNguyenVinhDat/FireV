import { UploadImageState } from '../states/uploadImage.state';
import * as UploadImageActions from '../actions/uploadImage.action';
import { createReducer, on } from '@ngrx/store';

const initialState: UploadImageState = {
  fileUp: <File>{},
  filepath: '',
  error: '',
  isSuccess: true,
  isLoading: false,
};

export const uploadImageReducer = createReducer(
  initialState,
  on(UploadImageActions.uploadImage, (state, action) => {
    let newState = {
      ...state,
      isLoading: true,
      fileUp: action.files,
    };
    console.log(newState);
    return newState;
  }),
  on(UploadImageActions.uploadImageSucceed, (state, action) => {
    let newState = {
      ...state,
      fileUp: <File>{},
      filepath: action.filepath,
      isLoading: false,
      isSuccess: true,
    };
    console.log(newState);
    return newState;
  }),
  on(UploadImageActions.uploadImageFailed, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
    isSuccess: false,
  }))
);
