import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { HomeComponent } from './home/components/home/home.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RouterModule } from '@angular/router';


const routes = [
{path: '', component: HomeComponent},
{path: 'signin', component: LoginComponent},
{path: 'register', component: SignupComponent}
];

@NgModule({
  // Registration of components
  declarations: [
    AppComponent
  ],
  // Using other modules.
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HomeModule,
    // To configure rounting
    RouterModule.forRoot(routes)

  ],
  // Register Services
  providers: [],
  // Startup component
  bootstrap: [AppComponent]
})
export class AppModule { }
