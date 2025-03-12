import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BooksService } from '../../services/books.service';
import { Book } from '../../entities/book.model';
import { BookHistory } from '../../entities/book-history.model';

@Component({
  selector: 'app-books',
  imports: [
    NgxPaginationModule,
    CommonModule,
  ],
  templateUrl: './books.component.html',
  standalone: true,
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {
  selectedBook: Book | null = null;
  showDetailsModal = false;
  showHistoryModal = false;

  bookHistory: BookHistory[] = [];
  currentHistoryPage: number;
  historyItemsPerPage: number;
  totalHistoryItems: number;

  books: Book[] = [];
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;

  constructor(private readonly booksService: BooksService) {
    this.currentPage = 1;
    this.itemsPerPage = 5;
    this.totalItems = 0;

    this.currentHistoryPage = 1;
    this.historyItemsPerPage = 5;
    this.totalHistoryItems = 0;
  }

  ngOnInit() {
    this.loadBooks();
  }

  changePage(page: number) {
    this.currentPage = page;
    this.loadBooks();
  }

  changeHistoryPage(page: number) {
    this.currentHistoryPage = page;
    setTimeout(() => this.loadBookHistory(this.selectedBook!.id), 0);
  }

  openDetailsModal(book: Book) {
    this.selectedBook = book;
    this.showDetailsModal = true;
  }

  closeDetailsModal() {
    this.selectedBook = null;
    this.showDetailsModal = false;
  }

  openHistoryModal(book: Book) {
    this.bookHistory = [];
    setTimeout(() => this.loadBookHistory(book.id), 0);
    this.selectedBook = book;
    this.showHistoryModal = true;
  }

  closeHistoryModal() {
    this.selectedBook = null;
    this.showHistoryModal = false;
  }

  loadBooks() {
    this.booksService.getBooks(this.currentPage, this.itemsPerPage).subscribe({
      next: (data) => {
        this.books = data.content;
        this.currentPage = data.currentPage;
        this.totalItems = data.totalElements;
      },
      error: (error) => {
        console.error('Error loading books:', error);
      },
    });
  }

  loadBookHistory(id: number) {
    this.booksService.getHistory(id).subscribe({
      next: (data) => {
        this.bookHistory = data.content;
        this.totalHistoryItems = data.totalElements;
      },
      error: (error) => {
        console.error('Error loading book history:', error);
      },
    });
  }

}
