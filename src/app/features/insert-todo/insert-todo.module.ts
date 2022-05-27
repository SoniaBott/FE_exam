import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertContainerComponent } from './insert-container/insert-container.component';
import { InsertDetailComponent } from './insert-detail/insert-detail.component';
import { InsertTodoRoutingModule } from './insert-todo-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InsertContainerComponent,
    InsertDetailComponent
  ],
  imports: [
    CommonModule,
    InsertTodoRoutingModule,
    FormsModule
  ]
})
export class InsertTodoModule { }
