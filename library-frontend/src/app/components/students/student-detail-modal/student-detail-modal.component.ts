import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../../../model/student.model';
import { DatePipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-student-detail-modal',
  imports: [
    DatePipe,
    NgClass
  ],
  templateUrl: './student-detail-modal.component.html',
  standalone: true,
  styleUrl: './student-detail-modal.component.css'
})
export class StudentDetailModalComponent {
  @Input() selectedStudent: Student | null = null;
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();


  closeDetailsModal() {
    this.onClose.emit(true);
  }
}
