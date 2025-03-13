import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../../../entities/book.model';
import { BooksService } from '../../../services/books.service';
import { BookHistory } from '../../../entities/book-history.model';
import { NgxPaginationModule } from 'ngx-pagination';
import { DatePipe, NgClass, NgForOf } from '@angular/common';

@Component({
  selector: 'app-book-history-modal',
  imports: [
    NgxPaginationModule,
    DatePipe,
    NgClass,
    NgForOf
  ],
  templateUrl: './book-history-modal.component.html',
  standalone: true,
  styleUrl: './book-history-modal.component.css'
})
export class BookHistoryModalComponent implements OnInit {
  @Input() selectedBook: Book | null = null;
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  bookHistory: BookHistory[] = [];
  historyItemsPerPage: string | number;
  currentHistoryPage: string | number;
  totalHistoryItems: string | number;

  constructor(private readonly booksService: BooksService) {
    this.currentHistoryPage = 1;
    this.historyItemsPerPage = 5;
    this.totalHistoryItems = 0;
  }

  ngOnInit(): void {
      this.loadBookHistory(this.selectedBook!.id);
  }

  closeHistoryModal() {
    this.onClose.emit(true);
  }

  changeHistoryPage(page: number) {
    this.currentHistoryPage = page;
    this.loadBookHistory(this.selectedBook!.id)
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
