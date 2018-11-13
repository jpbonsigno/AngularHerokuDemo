import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  
  constructor(public productService: ProductService, public snackBar: MatSnackBar) { }

  resetForm(productForm?: NgForm){
    if (productForm != null) {
      productForm.reset();
    }
    this.productService.selectedProduct = new Product();
  }

  sendProduct(productForm: NgForm){
    var messageReturn: string = '';
    if (productForm.value.$key == null) {
      this.productService.insertProduct(productForm.value);
      messageReturn = 'Product added!';
    }
    else{
      this.productService.updateProduct(productForm.value);
      messageReturn = 'Product updated!';
    }

    this.resetForm(productForm);
    this.snackBar.open(messageReturn, null, {
      duration: 2000,
    });
  }

  ngOnInit() {
    this.productService.getProducts();
    this.resetForm();
  }

}
