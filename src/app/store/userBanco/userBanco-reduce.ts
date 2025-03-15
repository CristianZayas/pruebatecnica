
import {createReducer , on} from '@ngrx/store';
import { searchUser } from './userbanco-action';


export interface UserSearchState {
    search: string;
    loading: boolean;
    error: any;
  }

export const initialState : UserSearchState = {
    search:'',
    loading: false,
    error: null
}

export const SearchUserReducer = createReducer(
    initialState,
    on(searchUser,(state, {search}) => ({...state,search,loading: true, error: null})),
)
