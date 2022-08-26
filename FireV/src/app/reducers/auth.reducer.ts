import { createReducer, on } from '@ngrx/store';
import { AuthState } from 'src/app/states/auth.state';
import * as AuthActions from 'src/app/actions/auth.action';

const initialState: AuthState = {
  isAuthenticated: false,
  idToken: '',
  error: '',
  _id: ''
};
export const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state) => state),
  on(AuthActions.loginSuccess, (state, action) => {
    let newState = {
      ...state,
      isAuthenticated: true,
      idToken: action.idToken,
    };
    console.log(action.type,newState.idToken);
    return newState;
  }),

  on(AuthActions.loginFailure, (state, action) => {
    let newState = {
      ...state,
      error: action.error,
    };
    console.log(newState);
    return newState;
  }),

  on(AuthActions.logOut, (state) => state),
  on(AuthActions.logOutSuccess, (state, action) => {
    let newState = {
      ...state,
      idToken: '',
      isAuthenticated: false,
    };
    console.log(action.type);
    return newState;
  }),
  on(AuthActions.logOutFailure, (state, action) => {
    let newState = {
      ...state,
      error: action.error,
    };
    console.log(action.error);
    return newState;
  })
);
