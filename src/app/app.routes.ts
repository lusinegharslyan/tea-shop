import { Routes } from '@angular/router';
import {Main} from './components/common/main/main';
import {Catalog} from './components/pages/catalog/catalog';
import {Product} from './components/pages/product/product';
import {Order} from './components/pages/order/order';

export const routes: Routes = [
  { path: '', component: Main, },
  { path: 'catalog', component: Catalog, },
  { path: 'product', component: Product, },
  { path: 'order', component: Order, },
];
