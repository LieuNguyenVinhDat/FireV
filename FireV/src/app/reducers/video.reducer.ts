import { createReducer, on } from "@ngrx/store";
import { Video } from "../models/video.model";
import { VideoState } from "../states/video.state";
import * as VideoActions from "../actions/video.action";


const initialState: VideoState = {
    error: '',
    videoList: [],
    videoLoad: <Video>{},
    isLoading: false,
    idToken: '',
    _id: ''
};

export const videoReducer = createReducer(
    initialState,
    on(VideoActions.createVideo, (state) => {
      return {
        ...state,
        isLoading: true
      }
    }),
    on(VideoActions.createVideoSucceed, (state, action) => {
     let newState = {
        ...state,
        videoLoad: action.video,
        isLoading: false,
     }
      console.log(newState);
      return newState;
    }),
    on(VideoActions.createVideoFailed, (state, {error}) => {
      return {
        ...state,
        error: error,
        isLoading: false
      }
    })
);
