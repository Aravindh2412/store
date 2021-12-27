import { createAction } from "@ngrx/store";
import { Books } from '../../model/model.interface';

export const getBooks = createAction('[Books] Get Books')
export const addBooks = createAction('[Books] Add Books', (newBooks:Books) => (newBooks))