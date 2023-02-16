import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Buffer } from 'buffer';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  ProceedLogin(inputdata:any) {
    return this.http.post('https://localhost:44321/User/Authenticate', inputdata);
  }

  IsLoggedIn() {
    this.GetRole();
    return localStorage.getItem('token') != null;
  }

  GetToken() {
    return localStorage.getItem('token') != null ? localStorage.getItem('token') : '';
  }

  Registration(inputdata:any) {
    return this.http.post('https://localhost:44321/User/Register', inputdata);
  }

  GetRole() {
    var token = localStorage.getItem('token');
    if(token != null) {
      var extractdata = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
      return extractdata.role;
    } else {
      return '';
    }
  }
}
