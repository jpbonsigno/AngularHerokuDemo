import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-productslist',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'category', 'location', 'price', 'actions'];
  dataSource: Product[] = [];

  constructor(private productService: ProductService, public snackBar: MatSnackBar) {
    
  }

  editProduct(product: Product){
    this.productService.selectedProduct = Object.assign({}, product);
  }

  deleteProduct($key: string){
    this.productService.deleteProduct($key);
    this.snackBar.open('Product deleted!', null, {
      duration: 2000,
    });
  }

  ngOnInit() {
    this.productService.getProducts()
      .snapshotChanges()
      .subscribe(item => {
        this.dataSource = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x['$key'] = element.key;
          this.dataSource.push(x as Product);
        });
      });
  }

}
