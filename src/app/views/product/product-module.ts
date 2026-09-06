import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing-module';
import {Product} from './product';
import {SharedModule} from '../../shared/shared-module';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    Product,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ProductRoutingModule
  ],
  exports:[ProductRoutingModule]
})
export class ProductModule { }
