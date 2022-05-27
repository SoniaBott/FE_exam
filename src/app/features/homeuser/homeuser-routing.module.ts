import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomecontainerComponent } from './home-container/home-container.component';

const routes: Routes = [
    {path:"", component:HomecontainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeUserRoutingModule { }
