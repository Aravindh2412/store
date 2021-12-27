import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addBooks, getBooks } from './store/action/action';
import { BookState } from './store/reducer/reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'store';
  newBook = { title:"" }
  books$ = this.store.select('Books')
  constructor(private store: Store<BookState>) {}

  ngOnInit(): void {
    this.getBookDetails();
  }

  getBookDetails(): void {
    this.store.dispatch(getBooks())
  }

  addBookDetails() {
  this.store.dispatch(addBooks(this.newBook))
  }
}
