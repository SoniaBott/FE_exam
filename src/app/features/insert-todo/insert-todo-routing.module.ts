import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertContainerComponent } from './insert-container/insert-container.component';


const routes: Routes = [
    {path:"", component:InsertContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsertTodoRoutingModule { }