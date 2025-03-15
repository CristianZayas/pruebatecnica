import { createAction, props } from '@ngrx/store';
import { IUser } from '../interfaces/IUser';

export const loadUser = createAction('[User] Load Users');
export const loadUserList = createAction('[User] Load User List Success', props<{ users: IUser[] }>());
export const loadUserListError = createAction('[User] Load User List Error', props<{ error: string }>());

