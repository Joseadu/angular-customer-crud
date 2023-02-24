import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Buffer } from 'buffer';
import { ProductModel } from '../Model/ProductModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  apiurl = 'https://localhost:44321/api/Product';

  GetProducts() {
    return this.http.get<ProductModel>(this.apiurl);
  }

  UpdateProduct(inputdata:any) {
    return this.http.post(this.apiurl, inputdata);
  }

  GetProductById(code:any) {
    return this.http.get(this.apiurl + '/' + code);
  }

  RegisterProduct(inputdata: any) {
    return this.http.post(this.apiurl, inputdata)
  }

  RemoveProduct(productid:any) {
    return this.http.delete(this.apiurl + '/' + productid);
  }
}
