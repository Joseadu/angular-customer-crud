import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { UserMasterService } from './Service/user-master.service';
import { UserService } from './Service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{

  constructor (private route:Router, private userService: UserService, private userMasterService: UserMasterService) { }

  isMenuVisible = true;
  isAdmin = false;
  userIsActive: any;

  ngDoCheck(): void {

    const currentroute = this.route.url;

    if(currentroute == '/login' || currentroute == '/access/register') {
      this.isMenuVisible = false;
    } else {
      this.isMenuVisible = true;
    }

    if(this.userService.GetRole() == 'admin') {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }


  }
}
