import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosPageComponent } from './todos-page/todos-page.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodosService } from './todos.service';
import { TodoFormComponent } from './todo-form/todo-form.component';

@NgModule({
  declarations: [TodosPageComponent, TodoItemComponent, TodoFormComponent],
  imports: [CommonModule, TodosRoutingModule, HttpClientModule, ReactiveFormsModule],
  providers: [TodosService],
})
export class TodosModule {}
