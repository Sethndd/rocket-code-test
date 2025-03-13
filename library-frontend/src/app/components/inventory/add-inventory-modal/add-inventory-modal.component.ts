import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Book } from '../../../model/book.model';
import { InventoryService } from '../../../services/inventory.service';
import { BooksService } from '../../../services/books.service';
import { NgClass, NgForOf } from '@angular/common';

@Component({
  selector: 'app-add-inventory-modal',
  imports: [
    ReactiveFormsModule,
    NgClass,
    NgForOf
  ],
  templateUrl: './add-inventory-modal.component.html',
  standalone: true,
  styleUrl: './add-inventory-modal.component.css'
})
export class AddInventoryModalComponent implements OnInit {
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  bookForm!: FormGroup;
  books!: Book[];

  constructor(
    private readonly inventoryService: InventoryService,
    private readonly fb: FormBuilder,
    private readonly booksService: BooksService,
  ) { }

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      id: [''],
      bookId: ['', Validators.required],
      quantity: [0, Validators.required],
    });

    this.loadBooks();
  }

  save() {
    const inventory = this.bookForm.value;
    this.inventoryService.saveInventory(inventory).subscribe({
      next: () => {
        this.closeModal();
      },
      error: (error) => {
        console.error('Error saving inventory:', error);
      },
    });
  }

 closeModal() {
    this.onClose.emit(true);
  }

  loadBooks() {
    this.booksService.getListBooks().subscribe({
      next: (data) => {
        this.books = data;
      },
      error: (error) => {
        console.error('Error loading books:', error);
      },
    });
  }
}
