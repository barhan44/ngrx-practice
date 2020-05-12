import { Component, Input, OnInit } from '@angular/core';

import { Todo } from '../../../store/model/todo.class';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {}

  onCompleteTask() {
    this.todosService.updateTodo({ ...this.todo, completed: true });
  }

  onIncompleteTask() {
    this.todosService.updateTodo({ ...this.todo, completed: false });
  }
}
