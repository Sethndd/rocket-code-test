import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Book } from '../../../model/book.model';
import { BooksService } from '../../../services/books.service';

@Component({
  selector: 'app-book-add-modal',
  imports: [
    NgClass,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './book-add-modal.component.html',
  standalone: true,
  styleUrl: './book-add-modal.component.css'
})
export class BookAddModalComponent implements OnInit {
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  bookForm!: FormGroup;
  currentYear: number;

  constructor(private readonly booksService: BooksService, private readonly fb: FormBuilder) {
    this.currentYear = new Date().getFullYear();
  }

  ngOnInit() {
      this.bookForm = this.fb.group({
      title: ["", Validators.required],
      author: ["", Validators.required],
      publisher: ["", Validators.required],
      publicationYear: [this.currentYear, [Validators.required, Validators.min(1000), Validators.max(this.currentYear)]],
      description: ["", Validators.required],
    });
  }

  closeAddModal() {
    this.onClose.emit(true);
  }

  saveChanges() {
    const book: Book = { ...this.bookForm.value }
    this.booksService.addBook(book).subscribe({
      next: () => {
        this.closeAddModal()
      },
      error: (error) => {
        console.error('Error saving:', error);
      },
    })
  }
}
