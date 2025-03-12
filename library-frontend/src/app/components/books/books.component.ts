import { Component, OnInit } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import bootstrap from 'bootstrap';

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
  books = [
    { id: 1, title: 'Book 1', author: 'Author 1', year: 2020, description: 'This is a description for Book 1' },
    { id: 2, title: 'Book 2', author: 'Author 2', year: 2021, description: 'This is a description for Book 2' },
    { id: 3, title: 'Book 3', author: 'Author 3', year: 2022, description: 'This is a description for Book 3' },
    { id: 4, title: 'Book 4', author: 'Author 4', year: 2023, description: 'This is a description for Book 4' },
    { id: 5, title: 'Book 5', author: 'Author 5', year: 2019, description: 'This is a description for Book 5' },
    { id: 6, title: 'Book 6', author: 'Author 6', year: 2018, description: 'This is a description for Book 6' },
    { id: 7, title: 'Book 7', author: 'Author 7', year: 2017, description: 'This is a description for Book 7' },
    { id: 8, title: 'Book 8', author: 'Author 8', year: 2016, description: 'This is a description for Book 8' },
    { id: 9, title: 'Book 9', author: 'Author 9', year: 2015, description: 'This is a description for Book 9' },
    { id: 10, title: 'Book 10', author: 'Author 10', year: 2014, description: 'This is a description for Book 10' },
    { id: 11, title: 'Book 11', author: 'Author 11', year: 2013, description: 'This is a description for Book 11' },
    { id: 12, title: 'Book 12', author: 'Author 12', year: 2012, description: 'This is a description for Book 12' },
  ];

  currentPage: number = 1;
  itemsPerPage: number = 5;
  selectedBook: any;
  showModal = false;

  ngOnInit() { }

  changePage(page: number) {
    this.currentPage = page;
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
