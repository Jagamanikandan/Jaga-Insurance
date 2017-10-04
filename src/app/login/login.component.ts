import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggedIn = false;
  constructor(private loginService: LoginService) {
   }

  ngOnInit() {
  }

onSubmit(loginData) {
  this.isLoggedIn = this.loginService.Login(loginData);
  console.log(loginData);
}

}
