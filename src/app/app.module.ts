import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  // Registration of components
  declarations: [
    AppComponent
  ],
  // Using other modules.
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // Register Services
  providers: [],
  // Startup component
  bootstrap: [AppComponent]
})
export class AppModule { }
