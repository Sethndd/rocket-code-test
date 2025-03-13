import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookInventory } from '../model/book-inventory.model';
import { Paginated } from '../model/paginated.model';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private readonly apiUrl = environment.BASE_URL

  constructor(private readonly http: HttpClient) { }

  getInventory(page: number, size: number): Observable<Paginated<BookInventory>> {
    return this.http.get<Paginated<BookInventory>>(`${this.apiUrl}/inventory?page=${page}&size=${size}`);
  }

  updateInventory(inventory: any): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/inventory`, inventory);
  }

  saveInventory(inventory: any): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/inventory`, inventory);
  }
}
