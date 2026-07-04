import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';

declare var $: any;

@Component({
  selector: 'app-main',
  imports: [CommonModule],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main implements OnInit, AfterViewInit, OnDestroy {
  openShowCatalogPopup: boolean = false;
  private observable: Observable<boolean>;
  private subscription: Subscription | null = null;

  constructor(
    private router: Router) {

    this.observable = new Observable((observer) => {
      const timeout: number = setTimeout(() => {
        observer.next(true);
      }, 10000);

      return {
        unsubscribe() {
          clearTimeout(timeout);
        }
      }
    });
  }

  ngOnInit() {
    this.subscription = this.observable.subscribe((value: boolean) => {
      this.openShowCatalogPopup = value;
    })
  }

  ngAfterViewInit(): void {
    ($('.carousel') as any).slick({
      dots: true,
      autoplay: true,
      arrows: true
    });
  }

  openCatalog(): void {
    this.openShowCatalogPopup = false;
    this.router.navigate(['/catalog']);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
