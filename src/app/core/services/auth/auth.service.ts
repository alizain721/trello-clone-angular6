import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = { email: 'alizain721@gmail.com', password: 'password' }

  constructor() { }

  login(email,password) {
    return this.user.email == email && this.user.password == password
  }

}
