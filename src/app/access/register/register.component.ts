import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserService } from 'src/app/Service/user.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private route:Router, private service:UserService) { }

  ngOnInit(): void {
  }

  RedirectLogin() {
    this.route.navigate(['login']);
  }

  respdata:any;

  reativeform = new FormGroup({
    userid: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    email: new FormControl('',Validators.compose([Validators.required, Validators.email])),
  });

  SaveUser() {
    if (this.reativeform.valid) {
      this.service.Registration(this.reativeform.value).subscribe(item => {
        this.respdata = item;
        if(this.respdata.result=='pass'){
          alertify.success('Registerted successfully please contact admin for activation');
          this.RedirectLogin();
        }else{
          alertify.error('Failed, try again');
        }
      });
    }

  }
}
