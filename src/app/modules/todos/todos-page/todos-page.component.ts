import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITodoState } from '../../../store/state/todo.state';
import { Store } from '@ngrx/store';
import { RootState } from '../../../store/state/root.state';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.scss'],
})
export class TodosPageComponent implements OnInit {
  public todoState$: Observable<ITodoState>;

  constructor(
    private store: Store<RootState>,
    private todosService: TodosService
  ) {
    this.todosService.loadTodos();
  }

  ngOnInit(): void {
    this.todoState$ = this.store.select('todos');
  }
}
