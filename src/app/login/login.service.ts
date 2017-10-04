import { Injectable } from '@angular/core';
import { LoginData } from './login.data';

@Injectable()
export class LoginService {
    loginData: LoginData;
    loginList: LoginData[] = [
    {
       username: 'Jaga',
       password: 'P',
       },
      {
        username: 'Mani',
        password: 'P',
       },
  ];

  Login(userData: LoginData): boolean {
      this.loginData = this.loginList.find(loginList => loginList.username === userData.username);
      console.log('I am here' + userData);
      return true;
}
}
