import { Component } from '@angular/core';

import { Product } from './product';
import { ProductService } from './product.service';
import { StarComponent } from '../shared/star.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  imports: [StarComponent, CommonModule, FormsModule],
})
export class ProductDetailComponent {
  pageTitle = 'Product Detail';
  product: Product | null = null;
  errorMessage = '';

  constructor(private productService: ProductService) {}

  getProduct(id: number): void {
    this.productService.getProduct(id).subscribe({
      next: (product) => this.onProductRetrieved(product),
      error: (err) => (this.errorMessage = err),
    });
  }

  onProductRetrieved(product: Product): void {
    this.product = product;

    if (this.product) {
      this.pageTitle = `Product Detail: ${this.product.productName}`;
    } else {
      this.pageTitle = 'No product found';
    }
  }
}
