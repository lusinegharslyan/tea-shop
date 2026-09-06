import {Component} from '@angular/core';
import {ProductService} from '../../shared/services/product.service';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class Product {
  constructor(public productService: ProductService) {
  }
}
