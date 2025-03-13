import { Component } from '@angular/core';
import { DatePipe, NgForOf, NgIf } from "@angular/common";
import { NgxPaginationModule } from "ngx-pagination";
import { Loan } from '../../model/loan.model';
import { LoansService } from '../../services/loans.service';
import { CreateLoanComponent } from './create-loan/create-loan.component';

@Component({
  selector: 'app-loans',
  imports: [
    NgForOf,
    NgxPaginationModule,
    DatePipe,
    NgIf,
    CreateLoanComponent
  ],
  templateUrl: './loans.component.html',
  standalone: true,
  styleUrl: './loans.component.css'
})
export class LoansComponent {
  loans: Loan[] = [];
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  showAddModal = false;

  constructor(private readonly loansService: LoansService) {
    this.currentPage = 1;
    this.itemsPerPage = 5;
    this.totalItems = 0;
  }

  ngOnInit() {
    this.loadLoans();
  }

  changePage(page: number) {
    this.currentPage = page;
    this.loadLoans();
  }

  loadLoans() {
    this.loansService.getLoans(this.currentPage, this.itemsPerPage).subscribe({
      next: (data) => {
        this.loans = data.content;
        this.totalItems = data.totalElements;
      },
      error: (error) => {
        console.error('Error loading loans:', error);
      },
    });
  }

  openAddModal() {
    this.showAddModal = true;
  }

  setDue(loan: Loan) {
    this.loansService.updateLoan(loan.loanId).subscribe({
      next: (data) => {
        console.log('Loan updated:');
            this.loadLoans();
      },
      error: (error) => {
        console.error('Error updating loan:', error);
      },
    });
  }

  closeAddModal() {
    this.showAddModal = false;
    this.loadLoans();
  }
}
