import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'list-users',
        loadComponent: () => import('../app/layout/table-users/table-users.component').then(m => m.TableUsersComponent)
    },
    {
        path: 'list-clients',
        loadComponent: () => import('../app/layout/table-user/table-user.component').then(m => m.TableUserComponent)
    }
];
