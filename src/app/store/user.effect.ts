import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserService } from '../service/user.service';
import { loadUser, loadUserList, loadUserListError } from './user-action';


@Injectable()
export class UsuarioEffects {
  constructor(private  readonly actions$ : Actions, private readonly UserServices : UserService) {}

  loadUsuarios$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUser),
      mergeMap(() => {
        return this.UserServices.getUsers().pipe(
          map(usuarios => {
            return loadUserList({ users: usuarios });
          }),
          catchError(error => {
            console.error('Error en el efecto:', error);
            return of(loadUserListError({ error: error.message }));
          })
        );
      })
    )
  );
}