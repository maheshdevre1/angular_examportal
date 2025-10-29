import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
   constructor(public login: LoginService) {}

   public logout() {
    //debugger;
    localStorage.clear(); // removes everything
    return true;
    // this.login.logout();
    // window.location.reload();
    // this.login.loginStatusSubject.next(false);
  }
}
