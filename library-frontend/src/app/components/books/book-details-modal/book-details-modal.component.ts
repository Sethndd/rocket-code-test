import { Component, EventEmitter, Input,  Output } from '@angular/core';
import { Book } from '../../../entities/book.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-book-details-model',
  imports: [
    NgClass
  ],
  templateUrl: './book-details-modal.component.html',
  standalone: true,
  styleUrl: './book-details-modal.component.css'
})
export class BookDetailsModalComponent {
  @Input() selectedBook: Book | null = null;
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();


  closeDetailsModal() {
    this.onClose.emit(true);
  }
}
