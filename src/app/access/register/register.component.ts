import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  RedirectLogin() {
    this.route.navigate(['login']);
  }

  reativeform = new FormGroup({
    userid: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    email: new FormControl('',Validators.compose([Validators.required, Validators.email])),
  });

  SaveUser() {
    console.log(this.reativeform.value.name)
  }
}
