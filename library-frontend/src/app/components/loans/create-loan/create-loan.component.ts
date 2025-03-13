import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import { Book } from '../../../model/book.model';
import { Student } from '../../../model/student.model';
import { StudentsService } from '../../../services/students.service';
import { BooksService } from '../../../services/books.service';
import { LoansService } from '../../../services/loans.service';

@Component({
  selector: 'app-create-loan',
  imports: [
    FormsModule,
    NgForOf,
    NgClass,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './create-loan.component.html',
  standalone: true,
  styleUrl: './create-loan.component.css'
})
export class CreateLoanComponent implements OnInit {
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  books: Book[] = [];
  students: Student[] = [];
  showToast: boolean = false;
  toastMessage: string = '';
  today: Date = new Date();
  isBookAvailable: boolean = false;
  form!: FormGroup;

  constructor(
    private readonly studentsService: StudentsService,
    private readonly booksService: BooksService,
    private readonly loansService: LoansService
  ) { }

  ngOnInit(): void {
    this.loadBooks();
    this.loadStudents();
    //due date should be bigger than today

    this.form = new FormGroup({
      book: new FormControl('', Validators.required),
      student: new FormControl('', Validators.required),
      loanDate: new FormControl(this.today, Validators.required),
      dueDate: new FormControl('', Validators.required)
    });

  }

  closeBorrowModal() {
    this.onClose.emit(true);
  }

  borrowBook() {
    const loan = {
      bookId: this.form.value.book,
      studentId: this.form.value.student,
      ...this.form.value
    };

    this.loansService.createLoan(loan).subscribe({
      next: () => {
        this.showToastMessage('Book borrowed successfully');
        this.closeBorrowModal();
      },
      error: (error) => {
        console.error('Error borrowing book:', error);
      },
    });
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

  loadStudents() {
    this.studentsService.getListStudents().subscribe({
      next: (data) => {
        this.students = data;
      },
      error: (error) => {
        console.error('Error loading students:', error);
      },
    });
  }

  showToastMessage(message: string) {
    console.log('showing toast message:', message);
    this.toastMessage = message;
    this.showToast = true;

    setTimeout(() => {
      this.showToast = false;
    }, 3000);
  }

  checkBookVisibility() {
    this.loansService.checkbookAvailability(this.form.value.book).subscribe({
      next: (data) => {
        this.isBookAvailable = data.borrowable;
      },
      error: (error) => {
        console.error('Error checking book availability:', error);
      },
    });
  }
}
