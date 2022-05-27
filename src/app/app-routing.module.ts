import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //imposto il path in modo che porti alla home all'avvio
  { path: "", redirectTo: "home", pathMatch: "full" },

  { path: "home", loadChildren: () => import('./features/homeuser/homeuser.module').then(m => m.HomeuserModule) },

  { path: "insert", loadChildren: () => import('./features/insert-todo/insert-todo.module').then(m => m.InsertTodoModule) },

  { path: "update", loadChildren: () => import('./features/update-todo/update-todo.module').then(m=>m.UpdateTodoModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
