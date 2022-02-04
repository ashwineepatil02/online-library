import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { UserModel } from '../models/user.model';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  signup(user : UserModel) {
    return this.http.post("http://localhost:56622/api/user/signup", { "firstName": user.FName, "lastName": user.LName, "email": user.email, "password": user.password });
  }

  login(email: string, password: string) {
    return this.http.post("http://localhost:56622/api/User/login", { "email": email, "password": password});
  }

  emailUrl: string="";
  getUser(email: string) {
    
    this.emailUrl = "http://localhost:56622/api/user/finduser/".concat(email);
    return this.http.get(this.emailUrl)
     .pipe(
       map(  
         (result: any)=> result)
         );
   

    //Observable (similar to promise) (books-from server)
    //provides data in form of streams,(getAll)
    //works on observer design pattern: publisher(getAll)-subscriber(customer) pattern

  }
}
