import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RootState } from '../../store/state/root.state';
import { Store } from '@ngrx/store';
import { Todo } from '../../store/model/todo.class';
import { LoadTodos } from '../../store/actions/todo.actions';

export const BASE_URL = 'http://localhost:3000/';

@Injectable()
export class TodosService {
  constructor(private http: HttpClient, private store: Store<RootState>) {}

  public loadTodos(): void {
    this.http.get(BASE_URL + 'todos').subscribe((todos: Todo[]) => {
      this.store.dispatch(new LoadTodos(todos));
    });
  }
}
