import {Component} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {ProductService} from '../../../services/product.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  constructor(private router: Router,
              private productService: ProductService) {
  }

  public searchProduct(value: string): void {
    this.router.navigate(['/catalog']);
    this.productService.searchProduct(value);
  }

  onSearchInput(value: string): void {
    if (value === '') {
      this.productService.searchProduct(value);
    }
  }
}
