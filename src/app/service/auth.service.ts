import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http:HttpClient) { }
  apiURL="http://localhost:3000";

  registeruser(user:any){
    console.log('====================================');
    console.log(user);
    console.log('====================================');
    return this.http.post(this.apiURL+'/adduser',user)
  }

  loginvalidation(){

  }

}
