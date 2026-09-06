import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Catalog} from './catalog';

const routes: Routes = [
  { path: 'catalog', component: Catalog, },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
