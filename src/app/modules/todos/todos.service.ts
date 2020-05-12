import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';

import { RootState } from '../../store/state/root.state';
import { Todo } from '../../store/model/todo.class';
import {
  AddTodo,
  DeleteTodo,
  LoadTodos,
  UpdateTodo,
} from '../../store/actions/todo.actions';

export const BASE_URL = 'http://localhost:3000/';

@Injectable()
export class TodosService {
  constructor(private http: HttpClient, private store: Store<RootState>) {}

  public loadTodos(): void {
    this.http.get<Todo[]>(BASE_URL + 'todos').subscribe((todos: Todo[]) => {
      this.store.dispatch(new LoadTodos(todos));
    });
  }

  public addTodo(todo: Todo): void {
    this.http
      .post<Todo>(BASE_URL + 'todos', todo)
      .subscribe((resTodo: Todo) => {
        this.store.dispatch(new AddTodo(resTodo));
      });
  }

  public updateTodo(todo: Todo): void {
    this.http
      .put(BASE_URL + 'todos/' + todo.id, todo)
      .subscribe((resTodo: Todo) => {
        this.store.dispatch(new UpdateTodo(resTodo));
      });
  }

  public deleteTodo(todo: Todo): void {
    this.http.delete(BASE_URL + 'todos/' + todo.id).subscribe(() => {
      this.store.dispatch(new DeleteTodo(todo));
    });
  }
}
