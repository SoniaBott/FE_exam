import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomecontainerComponent } from './home-container/home-container.component';
import { HomedetailComponent } from './home-detail/home-detail.component';
import { HomeUserRoutingModule } from './homeuser-routing.module';



@NgModule({
  declarations: [
    HomecontainerComponent,
    HomedetailComponent,
   
  ],
  imports: [
    CommonModule,
    HomeUserRoutingModule
  ]
})
export class HomeuserModule { }
