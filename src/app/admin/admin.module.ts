import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBookComponent } from './components/list-book/list-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { BookModule } from '../book/book.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ListBookComponent,
    EditBookComponent
  ],
  imports: [
    CommonModule,
    BookModule,
    SharedModule
  ],
  exports: [
    EditBookComponent,
    ListBookComponent
  ]
})
export class AdminModule { }
