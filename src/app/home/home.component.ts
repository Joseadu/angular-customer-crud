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
    // this.GetUserIsActive();
    // this.GetProduct();
  }

  ProductsDetails: any;

  // GetProduct() {
  //   this.ProductService.GetProducts().subscribe(items => {
  //     this.ProductsDetails = items;
  //     console.log(this.ProductsDetails);
  //   });
  // }

  // GetUserIsActive() {
  //   this.service.GetAllUser().subscribe(item => {
  //     for (let index = 0; index < item.length; index++) {
  //       console.log(item[index].isActive)
  //       if(item[index].isActive === true) {
  //         this.route.navigate(['home']);
  //       } else {
  //         alert("Ask an admin to activate your account")
  //         this.route.navigate(['login']);
  //       }
  //     }
  //   });
  // }
}
