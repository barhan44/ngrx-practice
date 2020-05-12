import { Action } from '@ngrx/store';

import { Todo } from '../model/todo.class';

export enum ETodosActions {
  LOAD_TODOS = 'LOAD_TODOS',
  ADD_TODO = 'ADD_TODO',
  UPDATE_TODO = 'UPDATE_TODO',
  DELETE_TODO = 'DELETE_TODO',
}

export class LoadTodos implements Action {
  public readonly type = ETodosActions.LOAD_TODOS;

  constructor(public payload: Todo[]) {}
}

export class AddTodo implements Action {
  public readonly type = ETodosActions.ADD_TODO;

  constructor(public payload: Todo) {}
}

export class UpdateTodo implements Action {
  public readonly type = ETodosActions.UPDATE_TODO;

  constructor(public payload: Todo) {}
}

export class DeleteTodo implements Action {
  public readonly type = ETodosActions.DELETE_TODO;

  constructor(public payload: Todo) {}
}

export type TodosActions = LoadTodos | AddTodo | UpdateTodo | DeleteTodo;
