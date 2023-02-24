import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../Service/product.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ProductModel } from '../Model/ProductModel';
import { ProductModalPopupComponent } from '../modalpopup/product-modal-popup/product-modal-popup.component';
import * as alertify from 'alertifyjs';
import { CreateProductModalPopupComponent } from '../modalpopup/create-product-modal-popup/create-product-modal-popup.component';

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private ProductService: ProductService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.GetProduct();
  }

  @ViewChild(MatPaginator) paginator !: MatPaginator;

  ProductsDetails: any;
  DataSource: any;

  GetProduct() {
    this.ProductService.GetProducts().subscribe(items => {
      this.ProductsDetails = items;
      // console.log(this.ProductsDetails);

      this.DataSource = new MatTableDataSource<ProductModel>(this.ProductsDetails);
      this.DataSource.paginator = this.paginator;
    });
  }

  displayedColumns: string[] = ['code', 'name', 'amount', 'action'];

  EditProduct(productid: any) {
    let popup = this.dialog.open(ProductModalPopupComponent, {
      width: '400px',
      data: {
        code: productid,
      }
    });
    popup.afterClosed().subscribe(item => {
      this.GetProduct();
    });
  }

  DeleteProduct(productid: any) {
    alertify.confirm("Remove product", "Do you want to delete this product?", () => {
      this.ProductService.RemoveProduct(productid).subscribe(item => {
        this.GetProduct();
        alertify.success("Product removed successfully");
      });
    }, function(){});
  }

  RegisterProduct() {
    this.dialog.open(CreateProductModalPopupComponent, {
      width: '400px',

    });
  }
}
