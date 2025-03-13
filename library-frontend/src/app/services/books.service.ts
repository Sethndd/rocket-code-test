import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paginated } from '../model/paginated.model';
import { Book } from '../model/book.model';
import { BookHistory } from '../model/book-history.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private readonly apiUrl = environment.BASE_URL

  constructor(private readonly http: HttpClient) { }

  getBooks(page: number, size: number): Observable<Paginated<Book>> {
    return this.http.get<Paginated<Book>>(`${this.apiUrl}/books?page=${page}&size=${size}`);
  }

  getListBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/books/all`);
  }

  getHistory(id: number): Observable<Paginated<BookHistory>> {
    return this.http.get<Paginated<BookHistory>>(`${this.apiUrl}/books/${id}/loans`);
  }

  editBook(book: Book): Observable<void> {
    console.log(book)
    return this.http.put<void>(`${this.apiUrl}/books`, { ...book })
  }

  addBook(book: Book): Observable<void> {
    console.log(book)
    return this.http.post<void>(`${this.apiUrl}/books`, { ...book })
  }
}
