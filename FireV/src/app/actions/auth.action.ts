import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';

export const login = createAction('[Auth] Login');
export const loginSuccess = createAction('[Auth] Login Success',props<{ idToken: string }>());
export const loginFailure = createAction('[Auth] Login Failure',props<{ error: string }>());

export const logOut = createAction('[Auth] LogOut');
export const logOutSuccess = createAction('[Auth] logOut Success');
export const logOutFailure = createAction('[Auth] Login Failure',props<{ error: string }>());

export const getIdToken = createAction('[Auth] Get idToken');
export const getIdTokenSuccess = createAction('[Auth] Get idToken Success', props<{ idToken: string }>());
export const getIdTokenFailure = createAction('[Auth] Get idToken Failure', props<{ error: string }>());

export const getUserId= createAction('[Auth] Get UserId',props<{idToken:string}>());
export const getUserIdSuccess = createAction('[Auth] Get UserId Success', props<{ _id: string }>());
export const getUserIdFailure = createAction('[Auth] Get UserId Failure', props<{ error: string }>());


export const createUser= createAction('[Auth] Create User',props<{idToken:string}>());
export const createUserSuccess = createAction('[Auth] Create User Success', props<{ user: any }>());
export const createUserFailure = createAction('[Auth] Create User Failure', props<{ error: string }>());



export const updateSub = createAction('[Auth] Update Sub',props<{id: string, idToken:string}>());
export const updateSubSuccess = createAction('[Auth] Update Sub Success', props<{ user: any }>());
export const updateSubFailure = createAction('[Auth] Update Sub Failure', props<{ error: string }>());
