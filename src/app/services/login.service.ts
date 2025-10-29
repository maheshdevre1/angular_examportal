import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

 constructor(private http: HttpClient, private router: Router) {}

 //current user: which is loggedin
  public getCurrentUser() {
    return this.http.get(`${baseUrl}/current-user`);
  }


  //generate token

  public generateToken(loginData: any) {
    return this.http.post(`${baseUrl}/generate-token`, loginData);
  }

  
  //login user: set token in localStorage
  public loginUser(token : any) {
    localStorage.setItem('token', token);

    return true;
  }


  //isLogin: user is logged in or not
  public isLoggedIn() {
   // console.log("isLogged is called")
    let tokenStr = localStorage.getItem('token');
    console.log("tokenStr ==>", tokenStr)
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      console.log("token is not there")
      //this.router.navigate(['/login']);
      return false;
    } else {
      return true;
    }
  }


   // logout : remove token from local storage
  public logout() {
    console.log("logout function is callled")
    localStorage.removeItem('token');
    //localStorage.removeItem('user');
    //this.router.navigate(['/login']);
    return true;
  }

  //get token
  public getToken() {
    return localStorage.getItem('token');
  }

  //set userDetail
  public setUser(user : any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  //getUser
  public getUser() {
    let userStr = localStorage.getItem('user');
    if (userStr != null) {
      return JSON.parse(userStr);
    } else {
      this.logout();
      return null;
    }
  }

  //get user role

  public getUserRole() {
    let user = this.getUser();
    return user.authorities[0].authority;
  }
}
