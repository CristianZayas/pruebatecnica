import { JsonPipe } from '@angular/common';
import { IUser } from './../../interfaces/IUser';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-table-user',
  standalone: true,
  imports: [],
  templateUrl: './table-user.component.html',
  styleUrl: './table-user.component.css'
})
export class TableUserComponent implements OnInit, OnDestroy {
  @Input() users :IUser[] = [];
  constructor(private readonly store: Store<any>) { }
  ngOnInit(): void {
    this.loaderUser();
  }

  loaderUser(){
    this.store.select(state => state).subscribe({
      next: (result) => {
      
        // Verifica si result.users es un arreglo
        if (!Array.isArray(result.users.users)) {
          console.error('Expected result.users to be an array of IUser');
          return;
        }
    
        // Asigna el arreglo de usuarios a this.users
        
        this.users = result.users.users;
        //console.log(this.users);
      },
      error: (err) => {
        console.error('Error while selecting state:', err);
      }
    });
  }
  ngOnDestroy(): void {
    //throw new Error('Method not implemented.');
  }

}
