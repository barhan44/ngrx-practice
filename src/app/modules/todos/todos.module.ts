import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosPageComponent } from './todos-page/todos-page.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodosService } from './todos.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TodosPageComponent, TodoItemComponent],
  imports: [CommonModule, TodosRoutingModule, HttpClientModule],
  providers: [TodosService],
})
export class TodosModule {}
