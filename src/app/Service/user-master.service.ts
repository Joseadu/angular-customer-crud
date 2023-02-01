import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../Model/UserModel';

@Injectable({
  providedIn: 'root'
})
export class UserMasterService {

  constructor(private http:HttpClient) { }

  apiurl = 'https://localhost:44321/api/UserMaster';

  GetAllUser(): Observable<UserModel> {
    return this.http.get<UserModel>(this.apiurl);
  }

  GetUserById(userid:any) {
    return this.http.get(this.apiurl + '/' + userid);
  }

  RemoveUser(userid:any) {
    return this.http.delete(this.apiurl + '/' + userid);
  }

  UpdateUser(inputdata:any) {
    return this.http.post(this.apiurl + 'ActivateUser', inputdata);
  }
}
