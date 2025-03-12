import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paginated } from '../entities/paginated.model';
import { Book } from '../entities/book.model';
import { BookHistory } from '../entities/book-history.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private readonly apiUrl = environment.BASE_URL

  constructor(private readonly http: HttpClient) { }

  getBooks(page: number, size: number): Observable<Paginated<Book>> {
    return this.http.get<Paginated<Book>>(`${this.apiUrl}/books?page=${page}&size=${size}`);
  }

  getHistory(id: number): Observable<Paginated<BookHistory>> {
    return this.http.get<Paginated<BookHistory>>(`${this.apiUrl}/books/${id}/loans`);
  }
}
