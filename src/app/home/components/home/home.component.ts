import { Component, OnInit } from '@angular/core';
import { BookModel } from 'src/app/book/components/models/book.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books: BookModel[];
  constructor() { 
    this.books=[];
  }


  // Lifecycle hook -> Compnent is initialized
  ngOnInit(): void {
    let dotNetBook = new BookModel(1, ".Net Core", "Packt", 1000, "https://images-na.ssl-images-amazon.com/images/I/51JdckX4AdL.jpg");
    this.books.push(dotNetBook);
    let ngBook = new BookModel(1, "Angular", "Packt", 800, "https://images-na.ssl-images-amazon.com/images/I/718rCk+pGeL.jpg");
    this.books.push(ngBook);
    let efBook = new BookModel(1, "Entity framework book", "Packt", 700, "https://www.dbooks.org/img/books/5591634375s.jpg");
    this.books.push(efBook);
    let sqlBook = new BookModel(1, "SQL Server", "Packt", 900, "https://www.tutorialspoint.com/sql/images/sql_pdfcover.jpg");
    this.books.push(sqlBook);

 
  }


}
