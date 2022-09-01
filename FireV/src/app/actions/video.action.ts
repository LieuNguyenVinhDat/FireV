import { createAction, props } from "@ngrx/store";
import { Video } from "../models/video.model";

export const createVideo = createAction(
  '[Video] Create Video',
  props<{ idToken: string, video: Video }>()
)
export const createVideoSucceed = createAction(
  '[Video] Create Video Succeed',
  props<{ video: Video }>()
);
export const createVideoFailed = createAction(
  '[Video] Create Video Failed',
  props<{ error: string }>()
);
export const getVideo = createAction(
  '[Video] Get Video',
);
export const getVideoSucceed = createAction(
  '[Video] Get Video Succeed',
  props<{ video: Video[] }>()
);
export const getVideoFailed = createAction(
  '[Video] Get Video Failed',
  props<{ error: string }>()
);
export const getVideoById = createAction(
  '[Video] Get Video By Id',
  props<{ id: string }>()
);
export const getVideoByIdSucceed = createAction(
  '[Video] Get Video By Id Succeed',
  props<{ video: Video }>()
);
export const getVideoByIdFailed = createAction(
  '[Video] Get Video By Id Failed',
  props<{ error: string }>()
);
export const getAllExceptId = createAction(
  '[Video] Get All Except Id',
  props<{ id: string }>()
);
export const getAllExceptIdSucceed = createAction(
  '[Video] Get All Except Id Succeed',
  props<{ video: Video[] }>()
);
export const getAllExceptIdFailed = createAction(
  '[Video] Get All Except Id Failed',
  props<{ error: string }>()
);
export const updateViews = createAction(
  '[Video] Update Views',
  props<{ id: string, video: Video }>()
);
export const updateViewsSucceed = createAction(
  '[Video] Update Views Succeed',
  props<{ video: Video }>()
);
export const updateViewsFailed = createAction(
  '[Video] Update Views Failed',
  props<{ error: string }>()
);

