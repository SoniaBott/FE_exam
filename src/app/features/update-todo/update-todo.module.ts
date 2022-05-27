import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateTodoRoutingModule } from './update-todo-routing.module';
import { UpdateContainerComponent } from './update-container/update-container.component';
import { UpdateDetailComponent } from './update-detail/update-detail.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UpdateContainerComponent,
    UpdateDetailComponent
  ],
  imports: [
    CommonModule,
    UpdateTodoRoutingModule,
    FormsModule]
})
export class UpdateTodoModule { }
