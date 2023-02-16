import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements DoCheck {

  constructor (private route:Router, private userService: UserService) { }

  isMenuVisible = true;
  isAdmin = false;
  userIsActive: any;
  isUserorAdmin: any;

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

    if(this.userService.GetRole() == 'admin' || this.userService.GetRole() == 'staff') {
      this.isUserorAdmin = true;
    } else {
      this.isUserorAdmin = false;
    }


  }

}
