import { Component, OnInit } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BooksService } from '../../services/books.service';
import { Book } from '../../entities/book.entitite';

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
  books: Book[] = []; // Will be populated with data from the API
  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalItems: number = 0;
  selectedBook: any;
  showModal = false;

  constructor(private readonly booksService: BooksService) {}

  ngOnInit() {
    this.loadBooks();
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
      complete: () => {
        console.log('Books data loading complete');
      }
    });
  }

  changePage(page: number) {
    this.currentPage = page;
    this.loadBooks();
  }

  openModal(book: any) {
    this.selectedBook = book;
    this.showModal = true;
  }

  closeModal() {
    this.selectedBook = null;
    this.showModal = false;
  }
}
