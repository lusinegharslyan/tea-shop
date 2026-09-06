import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order-routing-module';
import {Order} from './order';
import {SharedModule} from '../../shared/shared-module';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    Order,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    OrderRoutingModule
  ],
  exports: [OrderRoutingModule]
})
export class OrderModule { }
