import { createReducer, on } from '@ngrx/store';
import { Books } from '../../model/model.interface';
import { addBooks, getBooks } from '../action/action';


export interface BookState {
  Books: ReadonlyArray<Books>;
}

const initialState: ReadonlyArray<Books> = [];

export const bookReducer = createReducer(
  initialState,
  on(getBooks, (state) => [...mockBooks]),
  on(addBooks, (state, newBooks) => [...state, newBooks]))

    const mockBooks = [{
      title : "2 states"
     }]