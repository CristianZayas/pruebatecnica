import { UserSearchState } from './userBanco-reduce';
import {createSelector, createFeatureSelector} from '@ngrx/store';


export const selectUserSearchState = createFeatureSelector<UserSearchState>('userBanco');
export const selectUserSearch = createSelector(
    selectUserSearchState,
    state => state.search
  );



