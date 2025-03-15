import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly http : HttpClient) { }

  getUsers() : Observable<IUser[]>{
     return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
  }

  createUser(user: IUser): Observable<IUser>{
    return this.http.post<IUser>('https://jsonplaceholder.typicode.com/users', user);
  }

  updateUser(user: IUser): Observable<IUser>{
    return this.http.put<IUser>(`https://jsonplaceholder.typicode.com/users/${user.id}`, user);
  }

  deleteUser(id: number): Observable<void>{
    return this.http.delete<void>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}
