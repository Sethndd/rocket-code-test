import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from '../../../model/student.model';
import { StudentsService } from '../../../services/students.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-student-edit-modal',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgClass,
    NgIf
  ],
  templateUrl: './student-edit-modal.component.html',
  standalone: true,
  styleUrl: './student-edit-modal.component.css'
})
export class StudentEditModalComponent implements OnInit {
  @Input() selectedStudent: Student | null = null;
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  studentForm!: FormGroup;

  constructor(private readonly studentsService: StudentsService, private readonly fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      firstName: [this.selectedStudent!.firstName, Validators.required],
      lastName: [this.selectedStudent!.lastName, Validators.required],
      email: [this.selectedStudent!.email, Validators.required],
      enrollmentNumber: [this.selectedStudent!.enrollmentNumber, Validators.required],
      phoneNumber: [this.selectedStudent!.phoneNumber, Validators.required],
    });
  }

  closeEditModal() {
    this.onClose.emit(true);
  }

  saveChanges() {
    const student: Student = { id: this.selectedStudent?.id, ...this.studentForm.value, active: true }
    this.studentsService.editStudent(student).subscribe({
      next: () => {
        this.closeEditModal()
      },
      error: (error) => {
        console.error('Error saving:', error);
      },
    })
  }
}
