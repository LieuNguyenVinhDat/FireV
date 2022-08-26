import { createAction, props } from "@ngrx/store";

export const uploadImage = createAction(
  '[UploadImage] Upload Image',
   props<{ files: File }>()
);
export const uploadImageSucceed = createAction(
  '[UploadImage] Upload Image Succeed',
  props<{ filepath: string }>()
);
export const uploadImageFailed = createAction(
  '[UploadImage] Upload Image Failed',
  props<{ error: string }>()
);
