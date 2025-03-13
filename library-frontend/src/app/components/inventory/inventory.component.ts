import { Component, OnInit } from '@angular/core';
import { BookInventory } from '../../model/book-inventory.model';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgForOf, NgIf } from '@angular/common';
import { InventoryService } from '../../services/inventory.service';
import { EditInventoryModalComponent } from './edit-inventory-modal/edit-inventory-modal.component';
import { AddInventoryModalComponent } from './add-inventory-modal/add-inventory-modal.component';

@Component({
  selector: 'app-inventory',
  imports: [
    NgxPaginationModule,
    NgForOf,
    EditInventoryModalComponent,
    NgIf,
    AddInventoryModalComponent
  ],
  templateUrl: './inventory.component.html',
  standalone: true,
  styleUrl: './inventory.component.css'
})
export class InventoryComponent implements OnInit {
  books: BookInventory[] = [];
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  selectedBook: BookInventory | null = null;
  showEditModal: boolean = false;
  showAddModal: boolean = false;

  constructor(private readonly inventoryService: InventoryService) {
    this.currentPage = 1;
    this.itemsPerPage = 5;
    this.totalItems = 0;
  }

  ngOnInit(): void {
    this.loadBooks();
  }

  openEditModal(book: BookInventory) {
    this.selectedBook = book;
    this.showEditModal = true;
  }

  openAddModal() {
    this.showAddModal = true;
  }

  closeEditModal() {
    this.selectedBook = null;
    this.showEditModal = false;
    this.loadBooks()
  }

  changePage(page: number) {
    this.currentPage = page;
    this.loadBooks();
  }

  closeAddModal() {
    this.showAddModal = false;
    this.loadBooks();
  }

  loadBooks() {
    this.inventoryService.getInventory(this.currentPage, this.itemsPerPage).subscribe({
      next: (data) => {
        this.books = data.content;
        this.totalItems = data.totalElements;
      },
      error: (error) => {
        console.error('Error loading books:', error);
      },
    });
  }
}
