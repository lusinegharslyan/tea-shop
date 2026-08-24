import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ProductService} from '../../../services/product.service';
import {ProductOrderType} from '../../../types/product-order';
import {CommonModule} from '@angular/common';
import {CustomValidators} from '../../../shared/custom-validators';
import {Router} from '@angular/router';
import {OrderResponse} from '../../../types/order-response';

@Component({
  selector: 'app-order',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './order.html',
  styleUrl: './order.scss',
})
export class Order implements OnInit {
  showOrderConfirmation: boolean = false;
  orderForm: FormGroup = new FormGroup({});
  validateForm: boolean = false;
  showErrorMessage: boolean = false;

  constructor(private productService: ProductService,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    this.orderForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[А-Яа-яЁё]+$')]],
      last_name: ['', [Validators.required, Validators.pattern('^[А-Яа-яЁё]+$')]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9+]+$'), CustomValidators.phoneNumberValidator]],
      country: ['', [Validators.required, Validators.pattern(/^[А-Яа-яЁё0-9\s.,!?;:()"'«»\-_/\\@#$%^&*+=<>[\]{}|`~]*$/)]],
      zip: ['', [Validators.required]],
      product: ['', [Validators.required]],
      address: ['', [Validators.required, Validators.pattern('^[А-Яа-яЁё0-9\/\-\s]+$')]],
      comment: ['', [Validators.pattern(/^[А-Яа-яЁё0-9\s.,!?;:()"'«»\-_/\\@#$%^&*+=<>[\]{}|`~]*$/)]]
    });

    const savedProduct = localStorage.getItem('currentProduct');

    if (savedProduct) {
      this.productService.currentProduct = JSON.parse(savedProduct);
    }
    this.orderForm.patchValue({
      product: this.productService.currentProduct?.title
    });
  }

  get product() {
    return this.orderForm.get('product');
  }

  get comment() {
    return this.orderForm.get('comment');
  }

  get name() {
    return this.orderForm.get('name');
  }

  get lastName() {
    return this.orderForm.get('last_name');
  }

  get phone() {
    return this.orderForm.get('phone');
  }

  get country() {
    return this.orderForm.get('country');
  }

  get zip() {
    return this.orderForm.get('zip');
  }

  get address() {
    return this.orderForm.get('address');
  }

  public submitOrder(): void {
    this.validateForm = true;

    if (this.orderForm.invalid) return;

    this.productService.orderProduct(this.orderForm.value as ProductOrderType).subscribe((response:OrderResponse) => {

      if (response.success === 1) {
        this.showOrderConfirmation = true;
      } else if (response.success === 0) {
        this.showErrorMessage = true;
      }

      this.orderForm.reset();

      setTimeout((): void => {
        this.showErrorMessage = false;
        this.showOrderConfirmation = false;
        this.router.navigate(['/catalog']);
      }, 3000);

    });
  }
}
