import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { debounceTime, distinctUntilChanged, Subject, takeUntil } from 'rxjs';
import { searchUser } from '../../store/userBanco/userbanco-action';

@Component({
  selector: 'app-input-search-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input-search-user.component.html',
  styleUrl: './input-search-user.component.css',
})
export class InputSearchUserComponent implements OnInit, OnDestroy {
  public formSearch: FormGroup = new FormGroup({});
  private readonly $subject = new Subject<void>();
  constructor(
    private readonly fb: FormBuilder,
    private readonly store: Store
  ) {this.formSearch = this.fb.group({ search: [''] });}
  ngOnInit(): void {
    this.formSearch.get('search')?.valueChanges
      .pipe(takeUntil(this.$subject), debounceTime(300), distinctUntilChanged())
      .subscribe((value) => {
        if (value.length > 0) {
          this.searchUser();
        } else {
    this.store.dispatch(searchUser({ search: '' }));
          
        }
      });
  }
  ngOnDestroy(): void {
    this.$subject.next()
    this.$subject.complete();
    console.log('Se ha activado ngOnDestroy en input');
  }

  searchUser() {
    this.store.dispatch(searchUser({ search: this.formSearch.get('search')?.value }));
  }
}
