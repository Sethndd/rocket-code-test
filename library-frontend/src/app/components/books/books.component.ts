import { Component, OnInit } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BooksService } from '../../services/books.service';
import { Book } from '../../model/book.model';
import { BookHistoryModalComponent } from './book-history-modal/book-history-modal.component';
import { BookDetailsModalComponent } from './book-details-modal/book-details-modal.component';
import { BookEditModalComponent } from './book-edit-modal/book-edit-modal.component';
import { BookAddModalComponent } from './book-add-modal/book-add-modal.component';

@Component({
  selector: 'app-books',
  imports: [
    NgxPaginationModule,
    CommonModule,
    BookHistoryModalComponent,
    BookDetailsModalComponent,
    BookEditModalComponent,
    BookAddModalComponent,
  ],
  templateUrl: './books.component.html',
  standalone: true,
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {
  selectedBook: Book | null = null;
  showDetailsModal = false;
  showHistoryModal = false;
  showEditModal = false;
  showAddModal = false;

  books: Book[] = [];
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;

  constructor(private readonly booksService: BooksService) {
    this.currentPage = 1;
    this.itemsPerPage = 5;
    this.totalItems = 0;
  }

  ngOnInit() {
    this.loadBooks();
  }

  changePage(page: number) {
    this.currentPage = page;
    this.loadBooks();
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
    this.selectedBook = book;
    this.showHistoryModal = true;
  }

  closeHistoryModal() {
    this.selectedBook = null;
    this.showHistoryModal = false;
  }

  openEditModal(book: Book) {
    this.selectedBook = book;
    this.showEditModal = true;
  }

  closeEditModal() {
    this.selectedBook = null;
    this.showEditModal = false;
    this.loadBooks()
  }

  openAddModal(){
    this.showAddModal = true
  }

  closeAddModal(){
    this.showAddModal = false;
    this.loadBooks()
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
}
