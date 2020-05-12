import { Action } from '@ngrx/store';
import { Todo } from '../model/todo.class';

export enum ETodosActions {
  LOAD_TODOS = 'LOAD_TODOS',
}

export class LoadTodos implements Action {
  public readonly type = ETodosActions.LOAD_TODOS;

  constructor(public payload: Todo[]) {}
}

export type TodosActions = LoadTodos;
