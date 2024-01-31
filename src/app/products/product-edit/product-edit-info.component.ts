import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

import { Product } from '../product';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  templateUrl: './product-edit-info.component.html',
  imports: [CommonModule, FormsModule],
})
export class ProductEditInfoComponent implements OnInit {
  @ViewChild(NgForm) productForm?: NgForm;

  errorMessage = '';
  product = {
    id: 1,
    productName: 'test',
    productCode: 'test',
    description: 'test',
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}
}
