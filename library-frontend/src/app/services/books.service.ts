import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paginated } from '../entities/paginated.entity';
import { Book } from '../entities/book.entitite';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private readonly apiUrl = environment.BASE_URL

  constructor(private readonly http: HttpClient) { }

  getBooks(page: number, size: number): Observable<Paginated<Book>> {
    return this.http.get<Paginated<Book>>(`${this.apiUrl}/books?page=${page}&size=${size}`);
  }
}
