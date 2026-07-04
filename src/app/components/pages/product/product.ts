import {Component} from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [CommonModule, RouterLink],
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class Product {
  constructor(public productService: ProductService) {
  }
}
