import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from '../../../model/student.model';
import { StudentsService } from '../../../services/students.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { DatePipe, NgClass, NgForOf } from '@angular/common';
import { StudentHistory } from '../../../model/student-history.model';

@Component({
  selector: 'app-student-history-modal',
  imports: [
    NgxPaginationModule,
    DatePipe,
    NgForOf,
    NgClass
  ],
  templateUrl: './student-history-modal.component.html',
  standalone: true,
  styleUrl: './student-history-modal.component.css'
})
export class StudentHistoryModalComponent implements OnInit {
  @Input() selectedStudent: Student | null = null;
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  studentHistory: StudentHistory[] = [];
  historyItemsPerPage: string | number;
  currentHistoryPage: string | number;
  totalHistoryItems: string | number;

  constructor(private readonly studentsService: StudentsService) {
    this.currentHistoryPage = 1;
    this.historyItemsPerPage = 5;
    this.totalHistoryItems = 0;
  }

  ngOnInit(): void {
    this.loadStudentHistory(this.selectedStudent!.id);
  }

  closeHistoryModal() {
    this.onClose.emit(true);
  }

  changeHistoryPage(page: number) {
    this.currentHistoryPage = page;
    this.loadStudentHistory(this.selectedStudent!.id)
  }

  loadStudentHistory(id: number) {
    this.studentsService.getHistory(id).subscribe({
      next: (data) => {
        this.studentHistory = data.content;
        this.totalHistoryItems = data.totalElements;
      },
      error: (error) => {
        console.error('Error loading student history:', error);
      },
    });
  }
}
