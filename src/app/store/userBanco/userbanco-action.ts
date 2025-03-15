import {createAction, props} from '@ngrx/store';

export const searchUser = createAction('[User Search] Search user in the Banco Promerica',props<{search: string}>())