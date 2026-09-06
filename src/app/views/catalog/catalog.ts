import {Component, OnInit} from '@angular/core';
import {ProductType} from '../../../types/product-type';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {ProductService} from '../../shared/services/product.service';

@Component({
  selector: 'app-catalog',
  standalone: false,
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss',
})
export class Catalog implements OnInit {
  products: ProductType[] = [];
  pageTitle: string = "Наши чайные коллекции";
  private subscription: Subscription | null = null;
  searchValue: string = "";

  constructor(private productService: ProductService,
              private router: Router) {
  }

  ngOnInit() {
    this.subscription = this.productService.subject.subscribe((value: string) => {
      this.searchValue = value;
      this.getProducts();
    })
    this.getProducts();
  }

  public getProducts(): void {
    this.productService.getProducts().subscribe((response: ProductType[]) => {
      this.products = response;

      if (this.products.length === 0) {
        this.pageTitle = "Ничего не найдено"
      } else if (this.searchValue) {
        this.pageTitle = `Результаты поиска по запросу ${this.searchValue}`;
      } else {
        this.pageTitle = "Наши чайные коллекции";
      }
    });
  }

  public showProductDetails(product: ProductType): void {
    this.productService.currentProduct = product;
    localStorage.setItem('currentProduct', JSON.stringify(product));
    this.router.navigate(['/product']);
  }
}
