import { RouterOutlet } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from './service/user.service';
import { catchError, Subject, takeUntil } from 'rxjs';
import { TableUserComponent } from "./layout/table-user/table-user.component";
import { IUser } from './interfaces/IUser';
import { Store } from '@ngrx/store';
import { loadUser, loadUserList } from './store/user-action';
import { NavbarComponent } from "./shared/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TableUserComponent, RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  private readonly user$ = new Subject<void>();
  public user: IUser[] = [];
  constructor(private readonly UserServices: UserService,
              private store : Store<IUser[]>
  ){}
  ngOnInit(): void {
  this.loaderUser();
  //this.addUser();
  }
  
  loaderUser(){
    this.store.dispatch(loadUser());
    // this.UserServices.getUsers().pipe(takeUntil(this.user$), catchError((error) => error)).subscribe(
    //   {
    //     next: (result) => {
    //       //this.user = result as IUser[];
    //       this.store.dispatch(loadUserList({users: result as IUser[]}));
    //     },
    //     error: (error) => {console.log(error)}  
    //   }
    // );
  }

  addUser(){
    this.UserServices.createUser({id: 201, name: 'Quanty',email: 'quanty@gmail.com',phone: '1223323232',website:'quanty.com'})
    .pipe(takeUntil(this.user$), catchError((error) => {return error;}))
    .subscribe({
      next : (result) => {
       // console.log(result)
      }, error: (error) => {} 
    })
  }
  ngOnDestroy(): void {
    this.user$.next();
    this.user$.complete();
  }
  title = 'practicAngular';
}
