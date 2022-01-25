import { Component, Input, OnInit } from '@angular/core';
import { BookModel } from 'src/app/book/models/book.model';
import { BookService } from 'src/app/book/services/book.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {


  books: BookModel[];
  // book!: BookModel;
  
  constructor(private bookService: BookService) {
    this.books= [];
   }

  ngOnInit(): void {
    this.bookService.getAll().subscribe(
      (values) => { this.books = values; },
      (err) => { console.log("err"); }
    )
  }

  editBook()
  {

  }
  deleteBook()
  {

  }
  addBook()
  {
    
  }

}
