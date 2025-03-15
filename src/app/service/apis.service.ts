import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(private readonly http:  HttpClient) { }
   private readonly url = 'https://649088911e6aa71680cb6c15.mockapi.io/users';

  getUsers() : Observable<any>{
     return this.http.get<any>(this.url);
  }

  searchUsuario(name: string): Observable<any> {
    return this.http.get<any>(this.url+`?search=${name}`);
  }

  




}
