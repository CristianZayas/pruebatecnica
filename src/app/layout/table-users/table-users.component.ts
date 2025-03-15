import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApisService } from '../../service/apis.service';
import { catchError, debounceTime, distinctUntilChanged, map, Subject, takeUntil } from 'rxjs';
import { NumerotelefonoPipe } from '../../pipes/numerotelefono.pipe';
import { CountryNamePipe } from '../../pipes/country-name.pipe';
import { UrlShortenerPipe } from '../../pipes/url-shortener.pipe';
import { DatePipe } from '@angular/common';
import { FilamarcadaDirective } from '../../directive/filamarcada.directive';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { InputSearchUserComponent } from "../../shared/input-search-user/input-search-user.component";
import { Store } from '@ngrx/store';
import { selectUserSearch } from '../../store/userBanco/userBanco-selector';

@Component({
  selector: 'app-table-users',
  standalone: true,
  imports: [
    NumerotelefonoPipe,
    CountryNamePipe,
    UrlShortenerPipe,
    DatePipe,
    FilamarcadaDirective,
    ReactiveFormsModule,
    NgxSpinnerModule,
    InputSearchUserComponent
],
  templateUrl: './table-users.component.html',
  styleUrl: './table-users.component.css',
})
export class TableUsersComponent implements OnInit, OnDestroy {
  private readonly $subject = new Subject<void>();
  public users: any[] = [];
  public spinner: boolean = true;
  public messenger: string = 'No hay usuarios';
  constructor(
    private readonly ApisServices: ApisService,
    private readonly toastr: ToastrService,
    private readonly store: Store
  ) {}
  ngOnInit(): void {
    this.loader();
    this.loaderStore();
  }
  loader(): void {
    this.ApisServices.getUsers()
      .pipe(
        takeUntil(this.$subject),
        map((data) => data.slice(0, 25)),
        catchError((error) => {
          this.showError();
          this.spinner = false;
          return [];
        })
      )
      .subscribe({
        next: (data) => {
          this.spinner = false;
          this.users = data;
        },
        error: (error) => {
          this.showError();
        },
      });
}

loaderStore(){
  this.store.select(selectUserSearch).subscribe({
    next: result => {
      if(result.length > 0){
        console.log(result)
        this.searchUser(result);
      }else{
        console.log(result.length)
        this.loader();
      }
    },error : (error: HttpErrorResponse) => {
      console.log(error.status)
    }
  })
}
  ngOnDestroy(): void {
    this.$subject.next();
    this.$subject.complete();
    console.log('Se ha activado ngOnDestroy en table');
  }

  searchUser(search: string) {
    this.spinner = true;
    this.ApisServices.searchUsuario(search)
      .pipe(
        takeUntil(this.$subject),
        map((data) => data.slice(0, 25)),
        catchError((error: HttpErrorResponse) => {
         if(error.status === 404) {
          this.notfound()
          this.users = [];
         }
          this.spinner = false;
          return [];
        })
      )
      .subscribe({
        next: (data) => {
          this.spinner = false;
          this.users = data;
        },
        error: (error: HttpErrorResponse) => {
           this.notfound();
        },
      });
  }

  showError() {
    this.toastr.error('Algo salió mal', 'Error');
  }
  notfound() {
    this.messenger = 'No hay usuarios que coincidan con tu criterio de búsqueda';
    this.toastr.warning(
      'No hay usuarios que coincidan con tu criterio de búsqueda',
      'Advertencia'
    );
  }
}
