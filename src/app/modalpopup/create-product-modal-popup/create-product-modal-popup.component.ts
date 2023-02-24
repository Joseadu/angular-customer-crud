import { Component, Inject, inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Service/product.service';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-create-product-modal-popup',
  templateUrl: './create-product-modal-popup.component.html',
  styleUrls: ['./create-product-modal-popup.component.css']
})
export class CreateProductModalPopupComponent implements OnInit {

  constructor(private service: ProductService, private route: Router, @Inject(MAT_DIALOG_DATA) public data:any, private ref:MatDialogRef<CreateProductModalPopupComponent>) { }

  ngOnInit(): void {
  }

  respdata:any;

  RedirectToProducts() {
    this.ref.close();
  }

  reativeform = new FormGroup({
    // code: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    amount: new FormControl('', Validators.required),
    // email: new FormControl('',Validators.compose([Validators.required, Validators.email])),
  });

  SaveProduct() {
    if (this.reativeform.valid) {
      this.service.RegisterProduct(this.reativeform.value).subscribe(item => {
        this.respdata = item;
        console.log(item)
        if(this.respdata.result=='pass'){
          alertify.success('Product registerted successfully');
          this.RedirectToProducts();
          window.location.reload();
        }else{
          alertify.error('Failed, try again');
        }
      });
    }
  }
}
