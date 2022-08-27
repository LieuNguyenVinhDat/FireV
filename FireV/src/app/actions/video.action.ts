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
