import {createReducer, on} from '@ngrx/store';
import { IUser } from '../interfaces/IUser';
import { loadUser, loadUserList, loadUserListError } from './user-action';
export interface UserState {
    users: IUser[];
    loading: boolean;
    error: any;
  }
  
  export const initialState: UserState = {
    users: [],
    loading: false,
    error: null
  };


export const UserReducer =  createReducer(
    initialState,
    on(loadUser, (state) => ({ ...state, loading: true })),
  on(loadUserList, (state, { users }) => ({ ...state, users, loading: false })),
  on(loadUserListError, (state, { error }) => ({ ...state, error, loading: false }))
)