import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared-module';
import { CatalogModule } from './views/catalog/catalog-module';
import { MainModule } from './views/main/main-module';
import { OrderModule } from './views/order/order-module';
import { ProductModule } from './views/product/product-module';
import { AppRoutingModule } from './app.routes';
import { App } from './app';
import {Header} from './shared/layout/header/header';
import {Footer} from './shared/layout/footer/footer';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    App,
    Header,
    Footer
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    SharedModule,
    CatalogModule,
    MainModule,
    OrderModule,
    ProductModule,
    AppRoutingModule
  ],
  bootstrap: [
    App
  ]
})
export class AppModule {}
