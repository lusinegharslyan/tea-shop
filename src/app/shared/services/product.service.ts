import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {ProductType} from '../../../types/product-type';
import {ProductOrderType} from '../../../types/product-order';
import {OrderResponse} from '../../../types/order-response';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  currentProduct: ProductType | null = null;
  public subject: Subject<string>;
  searchValue: string = "";

  constructor(private http: HttpClient) {
    this.subject = new Subject<string>();
  }

  public getProducts(): Observable<ProductType[]> {
    const search = this.searchValue.trim();
    if (search) {
      return this.http.get<ProductType[]>(`https://testologia.ru/tea?search=${search}`
      );
    } else {
      return this.http.get<ProductType[]>('https://testologia.ru/tea');
    }
  }

  public orderProduct(order: ProductOrderType): Observable<OrderResponse> {
    return this.http.post<OrderResponse>('https://testologia.ru/order-tea', order);
  }

  public searchProduct(value: string): void {
    this.searchValue = value;
    this.subject.next(this.searchValue);
  }
}
