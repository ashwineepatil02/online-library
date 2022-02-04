import { Component, OnInit } from '@angular/core';
import { BookModel } from 'src/app/book/models/book.model';
import { UserModel } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user!: UserModel;
  
  email: string = "";
  password: string = "";
 

 
  handleLoginClick() {
    console.log(this.email);
    this.authService.login(this.email, this.password).subscribe(
      (values) => {
        console.log(values)
      },
      (err) => {}
    )
  }
  updateEmail(event: any) {
    this.email = event.target.value;
  }

  constructor(private authService: AuthService) {
    this.user;
 
   }

   ngOnInit(): void {
   
    
  }

 IfAdmin(email: string)
 {
  this.authService.getUser(this.email).subscribe(
    (value) => { this.user = value; },
    (err) => { console.log("err"); },
    () => { console.log("Observable data transfer completed"); }
  );
   console.log(this.user);
  // if(this.user.IsAdmin)
  // {
  //   return true;
  // }
  return false;
 }


}
