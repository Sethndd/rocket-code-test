import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paginated } from '../model/paginated.model';
import { Loan } from '../model/loan.model';

@Injectable({
  providedIn: 'root'
})
export class LoansService {
  private readonly apiUrl = environment.BASE_URL

  constructor(private readonly http: HttpClient) { }

  getLoans(page: number, size: number):Observable<Paginated<Loan>> {
    return this.http.get<Paginated<Loan>>(`${this.apiUrl}/loans?page=${page}&size=${size}`);
  }

  checkbookAvailability(bookId: number):Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/inventory/book/${bookId}`);
  }

  createLoan(loan: any):Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/loans`, loan);
  }

  updateLoan(loan: number):Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/loans/${loan}`, loan);
  }
}
