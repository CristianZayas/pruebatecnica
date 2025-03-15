import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ITaks } from '../../interfaces/ITaks';
import { DatePipe } from '@angular/common';
import { TodoListService } from '../../service/todo-list.service';

@Component({
  selector: 'app-table-todo-list',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './table-todo-list.component.html',
  styleUrl: './table-todo-list.component.css'
})
export class TableTODOLISTComponent implements OnInit, OnDestroy {
  @Input()taks : ITaks[] = []
  constructor(private readonly TodoListServices: TodoListService) {}
  ngOnInit(): void {}
  ngOnDestroy(): void {}
  delete(index: number){
    this.taks.splice(index, 1);
  }

  update(taks : ITaks){
     this.TodoListServices.taksSet(taks);
  }
}
