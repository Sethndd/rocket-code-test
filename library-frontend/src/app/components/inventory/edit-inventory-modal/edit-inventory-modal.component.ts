import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookInventory } from '../../../model/book-inventory.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InventoryService } from '../../../services/inventory.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-edit-inventory-modal',
  imports: [
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './edit-inventory-modal.component.html',
  standalone: true,
  styleUrl: './edit-inventory-modal.component.css'
})
export class EditInventoryModalComponent implements OnInit {
  @Input() selectedBook: BookInventory | null = null;
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  bookForm!: FormGroup;

  constructor(private readonly inventoryService: InventoryService, private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.selectedBook);
    this.bookForm = this.fb.group({
      id: [this.selectedBook!.id],
      bookId: [this.selectedBook!.bookId],
      quantity: [this.selectedBook!.quantity, Validators.required],
    });
  }

  saveBook() {
    const inventory = this.bookForm.value;
    this.inventoryService.updateInventory(inventory).subscribe({
      next: () => {
        this.closeModal();
      },
      error: (error) => {
        console.error('Error updating inventory:', error);
      },
    });
  }

  closeModal() {
    this.onClose.emit(true);
  }
}
