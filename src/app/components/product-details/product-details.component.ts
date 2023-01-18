import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProducts } from '../../models/products';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product!: IProducts;
  productsSubscription!: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.productsSubscription = this.route.data.subscribe((data) => {
      this.product = data['data'];
    });
  }
}
