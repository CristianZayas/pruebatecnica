import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import { UserService } from '../service/user.service';
import { loadUser, loadUserList, loadUserListError } from './user-action';
import { UsuarioEffects } from './user.effect';
import { IUser } from '../interfaces/IUser';

describe('UsuarioEffects', () => {
  let actions$: Observable<any>;
  let effects: UsuarioEffects;
  let userServiceSpy: jasmine.SpyObj<UserService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('UserService', ['getUsers']);

    TestBed.configureTestingModule({
      providers: [
        UsuarioEffects,
        provideMockActions(() => actions$),
        { provide: UserService, useValue: spy }
      ]
    });

    effects = TestBed.inject(UsuarioEffects);
    userServiceSpy = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;
  });

  it('debería cargar usuarios correctamente', () => {
    // Mock de datos de usuarios
    const mockUsers: IUser[] = [
      { id: 1, name: 'Usuario 1', email: 'usuario1@example.com', phone: '123-456-7890', website: 'www.usuario1.com' },
      { id: 2, name: 'Usuario 2', email: 'usuario2@example.com', phone: '098-765-4321', website: 'www.usuario2.com' }
    ];
    
    // Configurar el spy para devolver los usuarios de prueba
    userServiceSpy.getUsers.and.returnValue(of(mockUsers));
    
    // Simular la acción que dispara el efecto
    actions$ = hot('-a', { a: loadUser() });
    
    // Definir la acción esperada como resultado
    const expected = cold('-b', { b: loadUserList({ users: mockUsers }) });
    
    // Verificar que el efecto emite la acción esperada
    expect(effects.loadUsuarios$).toBeObservable(expected);
  });

  it('debería manejar errores correctamente', () => {
    // Simular un error en el servicio
    const errorMsg = 'Error al cargar usuarios';
    userServiceSpy.getUsers.and.returnValue(throwError(() => new Error(errorMsg)));
    
    // Simular la acción que dispara el efecto
    actions$ = hot('-a', { a: loadUser() });
    
    // Definir la acción de error esperada
    const expected = cold('-b', { b: loadUserListError({ error: errorMsg }) });
    
    // Verificar que el efecto emite la acción de error
    expect(effects.loadUsuarios$).toBeObservable(expected);
  });
});