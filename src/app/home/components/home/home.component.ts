import { Component, OnInit } from '@angular/core';
import { BookModel } from 'src/app/book/models/book.model';
import { BookService } from 'src/app/book/services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books: BookModel[];

  //constructor dependencies are resolved by framework.
  constructor(private bookService:BookService)
  { 
    this.books=[];
  }


  // Lifecycle hook -> Compnent is initialized
  ngOnInit(): void {
    this.bookService.getAll().subscribe(
      (values) => { this.books = values; },
      (err) => { console.log("err"); },
      () => { console.log("Observable data transfer completed"); }
    );
    
  }



}
