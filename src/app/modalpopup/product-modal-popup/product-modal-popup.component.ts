import { Component, Inject, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-product-modal-popup',
  templateUrl: './product-modal-popup.component.html',
  styleUrls: ['./product-modal-popup.component.css']
})
export class ProductModalPopupComponent implements OnInit {

  constructor(private service: ProductService, @Inject(MAT_DIALOG_DATA) public data:any, private ref:MatDialogRef<ProductModalPopupComponent>) { }

  ngOnInit(): void {
    console.log(this.data)
    this.GetExisProduct(this.data.code);
  }

  editdata: any;
  savedata: any;

  updateform = new FormGroup({
    code: new FormControl({value: "", disabled: false}, Validators.required),
    name: new FormControl("", Validators.required),
    amount: new FormControl("", Validators.required)
  });

  SaveProduct() {
    if (this.updateform.valid) {
      this.service.UpdateProduct(this.updateform.getRawValue()).subscribe(item => {
        this.savedata = item;
        if (this.savedata.result == 'pass') {
          alert("Updated successfully.")
          this.ref.close();
        } else {
          alert("Failed try again");
        }
      });
    }
  }

  GetExisProduct(code: any) {
    this.service.GetProductById(code).subscribe(item => {
      this.editdata = item;
      console.log(this.editdata);

      if (this.editdata != null) {
        this.updateform.setValue({
          code: this.editdata.code,
          name: this.editdata.name,
          amount: this.editdata.amount
        });
      }
    });
  }
}
