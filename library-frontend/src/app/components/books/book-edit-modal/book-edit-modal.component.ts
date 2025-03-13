import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../../../model/book.model';
import { BooksService } from '../../../services/books.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-book-edit-modal',
  imports: [
    NgClass,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './book-edit-modal.component.html',
  standalone: true,
  styleUrl: './book-edit-modal.component.css'
})
export class BookEditModalComponent implements OnInit {
  @Input() selectedBook: Book | null = null;
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  bookForm!: FormGroup;
  currentYear: number;

  constructor(private readonly booksService: BooksService, private readonly fb: FormBuilder) {
    this.currentYear = new Date().getFullYear();
  }

  ngOnInit() {
    this.bookForm = this.fb.group({
      title: [this.selectedBook!.title, Validators.required],
      author: [this.selectedBook!.author, Validators.required],
      publisher: [this.selectedBook!.publisher, Validators.required],
      publicationYear: [this.selectedBook!.publicationYear, [Validators.required, Validators.min(1000), Validators.max(new Date().getFullYear())]],
      description: [this.selectedBook!.description, Validators.required],
    });
  }

  closeDetailsModal() {
    this.onClose.emit(true);
  }

  saveChanges() {
    const book: Book = { id: this.selectedBook?.id, ...this.bookForm.value }
    this.booksService.editBook(book).subscribe({
      next: () => {
        this.closeDetailsModal()
      },
      error: (error) => {
        console.error('Error saving:', error);
      },
    })
  }
}
