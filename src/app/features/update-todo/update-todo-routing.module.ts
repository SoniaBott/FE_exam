import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateContainerComponent } from './update-container/update-container.component';

const routes: Routes = [
  //path per prendere l'id del todo da modificare
  {path:":id", component:UpdateContainerComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateTodoRoutingModule { }
