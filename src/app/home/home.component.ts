import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ProductService } from '../Service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ProductService: ProductService, private route: Router) { }

  ngOnInit(): void {
    this.GetProducts();
    this.GetProductsHome();
  }

  ProductsDetails: any;
  ProductList: any = [{}];
  Last4Products: any = [{}];

  GetProducts() {
    this.ProductService.GetProducts().subscribe(items => {
      this.ProductList = items;
      // console.log(this.ProductsList);
    });
  }

  GetProductHome: any = [{}];

  GetProductsHome() {
    this.ProductService.GetProducts().subscribe(items => {
      this.GetProductHome = items;
      // console.log(this.GetProductHome);

      this.Last4Products = this.GetProductHome.slice(Math.max(this.GetProductHome.length - 4, 0));
      this.Last4Products.reverse();
    });
  }
}
