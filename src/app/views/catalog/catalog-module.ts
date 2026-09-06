import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogRoutingModule } from './catalog-routing-module';
import {Catalog} from './catalog';
import {SharedModule} from '../../shared/shared-module';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    Catalog,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    CatalogRoutingModule,
  ],
  exports: [CatalogRoutingModule]
})
export class CatalogModule { }
