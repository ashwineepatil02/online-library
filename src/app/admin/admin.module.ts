import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBookComponent } from './components/list-book/list-book.component';
import { BookModule } from '../book/book.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ListBookComponent  ],
  imports: [
    CommonModule,
    BookModule,
    SharedModule
  ],
  exports: [

    ListBookComponent
  ]
})
export class AdminModule { }
