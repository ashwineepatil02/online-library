import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BookModel } from 'src/app/book/models/book.model';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  //Constructor dependency injection
  constructor(private http: HttpClient) { }
  
  getAll() {
    return this.http.get("http://localhost:56622/api/book")
     .pipe(
       map(  
         (result: any)=> result)
         );
   

    //Observable (similar to promise) (books-from server)
    //provides data in form of streams,(getAll)
    //works on observer design pattern: publisher(getAll)-subscriber(customer) pattern

  }
}
