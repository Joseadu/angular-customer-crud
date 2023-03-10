import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/Material-Module';
import { FormsModule } from '@angular/forms';
import { UserService } from '../Service/user.service';
import { Router } from '@angular/router';
import { UserMasterService } from '../Service/user-master.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MaterialModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:UserService, private MasterService: UserMasterService, private route:Router) { }

  ngOnInit(): void {
    localStorage.clear();
    // this.GetExistData(this.userid: any);
  }

  respdata:any;
  isActive: any;

  ProceedLogin(logindata:any) {
    if(logindata.valid) {
      this.service.ProceedLogin(logindata.value).subscribe(item => {
        this.respdata = item;
        // console.log(this.respdata);
        if(this.respdata != null) {
          localStorage.setItem('token', this.respdata.jwtTokken);
          this.route.navigate(['home']);
        } else {
          alert('Login failed');
        }
      });
    }
  }
}
