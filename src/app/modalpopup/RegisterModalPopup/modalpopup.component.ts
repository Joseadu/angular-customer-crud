import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { UserMasterService } from '../../Service/user-master.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-modalpopup',
  templateUrl: './modalpopup.component.html',
  styleUrls: ['./modalpopup.component.css']
})
export class ModalpopupComponent implements OnInit {

  constructor(private service:UserMasterService, @Inject(MAT_DIALOG_DATA) public data:any, private ref:MatDialogRef<ModalpopupComponent>) {

  }

  ngOnInit(): void {
    this.GetAllRole();
    console.log(this.data);
    this.GetExistData(this.data.userid);
  }

  roledata: any;
  editdata: any;
  savedata: any;

  updateform = new FormGroup({
    userid: new FormControl({value: "", disabled: true}),
    role: new FormControl("", Validators.required),
    isActive: new FormControl(true)
  });

  SaveUser() {
    if (this.updateform.valid) {
      this.service.UpdateUser(this.updateform.getRawValue()).subscribe(item => {
        this.savedata = item;
        if (this.savedata.result == 'pass') {
          alertify.success("Updated successfully.")
          this.ref.close();
        } else {
          alertify.error("Failed try again");
        }
      });
    }
  }

  GetAllRole() {
    this.service.GetAllRoles().subscribe(item => {
      this.roledata = item;
    });
  }

  GetExistData(userid: any) {
    this.service.GetUserById(userid).subscribe(item => {
      this.editdata = item;
      // console.log(this.editdata.isActive);
      if (this.editdata != null) {
        this.updateform.setValue({
          userid: this.editdata.userid,
          role: this.editdata.role,
          isActive: this.editdata.isActive
        });
      }
    });
  }
}
