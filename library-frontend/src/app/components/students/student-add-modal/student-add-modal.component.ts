import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from '../../../model/student.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StudentsService } from '../../../services/students.service';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-student-add-modal',
  imports: [
    ReactiveFormsModule,
    NgClass,
    NgIf
  ],
  templateUrl: './student-add-modal.component.html',
  standalone: true,
  styleUrl: './student-add-modal.component.css'
})
export class StudentAddModalComponent implements OnInit {
  @Input() selectedStudent: Student | null = null;
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  studentForm!: FormGroup;

  constructor(private readonly studentsService: StudentsService, private readonly fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", Validators.required],
      enrollmentNumber: ["", Validators.required],
      phoneNumber: ["", Validators.required],
    });
  }

  closeEditModal() {
    this.onClose.emit(true);
  }

  saveChanges() {
    const student: Student = {id: this.selectedStudent?.id, ...this.studentForm.value, active: true}
    this.studentsService.addStudent(student).subscribe({
      next: () => {
        this.closeEditModal()
      },
      error: (error) => {
        console.error('Error saving:', error);
      },
    })
  }
}
