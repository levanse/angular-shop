import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { catchError, EMPTY, Observable } from 'rxjs';
import { IProducts } from '../models/products';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root',
})
export class ProductResolver implements Resolve<IProducts> {
  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IProducts> {
    return this.productsService.getProduct(route.params?.['id']).pipe(
      catchError(() => {
        this.router.navigate(['/products']);
        return EMPTY;
      })
    );
  }
}
