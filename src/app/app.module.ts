import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
  // Registration of components
  declarations: [
    AppComponent
  ],
  // Using other modules.
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule
  ],
  // Register Services
  providers: [],
  // Startup component
  bootstrap: [AppComponent]
})
export class AppModule { }
