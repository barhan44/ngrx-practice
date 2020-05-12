import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Todo } from '../../../store/model/todo.class';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  todoForm = new FormGroup({
    title: new FormControl('', Validators.required),
    text: new FormControl('', Validators.required),
  });

  constructor(
    private todosService: TodosService
  ) {}

  ngOnInit(): void {}

  onAddTodo(): void {
    const todoTitle = this.todoForm.get('title')?.value;
    const todoText = this.todoForm.get('text')?.value;
    const todo = new Todo(todoTitle, todoText);
    this.todosService.addTodo(todo);
    this.todoForm.reset();
  }

  clearForm() {
    this.todoForm.reset();
  }
}
