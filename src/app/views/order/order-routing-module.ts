import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Order} from './order';

const routes: Routes = [
  { path: 'order', component: Order, },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
