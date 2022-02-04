import { ValueTransformer } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  fname: string = "";
  lname: string = "";
  email: string = "";
  password: string = "";
  password1: string = "";

  user: UserModel = new UserModel( this.fname, this.lname, this.email, this.password, false);
  
  constructor(private authService: AuthService) {
    
   }
  
  displayUser() {
    console.log(this.user);
   }
   
  handleSignup() {
    console.log(this.user);
    this.authService.signup(this.user).subscribe(
      (values) => {
        console.log(values)
      },
      (err) => {}
      
    )
  }


  ngOnInit(): void {
  }

}
