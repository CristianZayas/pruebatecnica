import { Component, OnDestroy, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { TableTODOLISTComponent } from "../table-todo-list/table-todo-list.component";
import { ITaks } from '../../interfaces/ITaks';
import { TodoListService } from '../../service/todo-list.service';
@Component({
  selector: 'app-formulario-todo-list',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, TableTODOLISTComponent],
  templateUrl: './formulario-todo-list.component.html',
  styleUrl: './formulario-todo-list.component.css'
})
export class FormularioTODOLISTComponent implements OnInit, OnDestroy {
  public form : FormGroup =  new FormGroup({});
  public tak : ITaks[] = []
  constructor(private readonly fb: FormBuilder , private readonly TodoListServices: TodoListService) {
    this.form = this.fb.group({
      todo: ['', [Validators.required, Validators.minLength(3)]]
    });
  }  
  ngOnInit(): void {
   this.TodoListServices.taks.subscribe((taks) => {
      this.form.patchValue({todo: taks.taks});
    }
    );  
  }
  ngOnDestroy(): void {}

  onSubmit(){
    const taks =  {
      date: new Date().toString(),
      taks : String(this.form.value.todo).trim()
    }
    this.tak.push(taks);
    this.form.reset();
  }
}
