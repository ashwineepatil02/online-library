import { Component, Input, OnInit } from '@angular/core';
import { BookModel } from 'src/app/book/components/models/book.model';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {


  // @Input() books;
  
  constructor() { }

  ngOnInit(): void {
  }

}
