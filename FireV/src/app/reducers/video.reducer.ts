import { createReducer, on } from "@ngrx/store";
import { Video } from "../models/video.model";
import { VideoState } from "../states/video.state";
import * as VideoActions from "../actions/video.action";
import { sample } from "rxjs";


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
    on(VideoActions.createVideo, (state,action) => {
      console.log(action.type)
      return {
        ...state,
        isLoading: true,
        idToken: action.idToken,
        videoLoad: action.video
      }
    }),
    on(VideoActions.createVideoSucceed, (state, action) => {
     let newState = {
        ...state,
        isLoading: false,
        videoLoad : <Video>{}
     }
      console.log(action.type,action.video);
      return newState;
    }),
    on(VideoActions.createVideoFailed, (state,action) => {
      console.log(action.error)
      return {
        ...state,
        error: action.error,
        isLoading: false
      }
    }),
    on(VideoActions.getVideo, (state,action) => {
      console.log(action.type)
      return {
        ...state,
        isLoading: true,
      }
    }),
    on(VideoActions.getVideoSucceed, (state, action) => {
      let newState = {
          ...state,
          isLoading: false,
          videoList : action.video
      }
        console.log(action.video);
        return newState;
    }),
    on(VideoActions.getVideoFailed, (state,action) => {
      console.log(action.error,action)
      return {
        ...state,
        error: action.error,
        isLoading: false
      }
    }),
    on(VideoActions.getVideoById, (state,action) => {
      console.log(action.id)
      return {
        ...state,
        isLoading: true,
        _id: action.id
      }
    }),
    on(VideoActions.getVideoByIdSucceed, (state, action) => {
      let newState = {
          ...state,
          isLoading: false,
          videoLoad : action.video,
          _id: "",
      }
        console.log(action.video);
        return newState;
    }),
    on(VideoActions.getVideoByIdFailed, (state,action) => {
      console.log(action.error)
      return {
        ...state,
        error: action.error,
        isLoading: false,
        _id: ""

      }
    }),
    on(VideoActions.getAllExceptId, (state,action) => {
      console.log(action.id)
      return {
        ...state,
        isLoading: true,
        _id: action.id
      }
    }),
    on(VideoActions.getAllExceptIdSucceed, (state, action) => {
      let newState = {
          ...state,
          isLoading: false,
          videoList : action.video,
          _id: "",
      }
        console.log(action.video);
        return newState;
    }),
    on(VideoActions.getAllExceptIdFailed, (state,action) => {
      console.log(action.error)
      return {
        ...state,
        error: action.error,
        isLoading: false,
        _id: ""
      }
    }),

);
