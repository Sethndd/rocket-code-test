import { Component, OnInit } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { Student } from '../../model/student.model';
import { StudentsService } from '../../services/students.service';
import { StudentDetailModalComponent } from './student-detail-modal/student-detail-modal.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { StudentHistoryModalComponent } from './student-history-modal/student-history-modal.component';
import { StudentEditModalComponent } from './student-edit-modal/student-edit-modal.component';
import { StudentAddModalComponent } from './student-add-modal/student-add-modal.component';

@Component({
  selector: 'app-students',
  imports: [
    NgForOf,
    StudentDetailModalComponent,
    NgIf,
    NgxPaginationModule,
    StudentHistoryModalComponent,
    StudentEditModalComponent,
    StudentAddModalComponent,
  ],
  templateUrl: './students.component.html',
  standalone: true,
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit {

  selectedStudent: Student | null = null;
  showDetailsModal = false;
  showEditModal = false;
  showAddModal = false;
  showHistoryModal = false;

  students: Student[] = [];
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;

  constructor(private readonly studentsService: StudentsService) {
    this.currentPage = 1;
    this.itemsPerPage = 5;
    this.totalItems = 0;
  }

  ngOnInit() {
    this.loadStudents();
  }

  changePage(page: number) {
    this.currentPage = page;
    this.loadStudents();
  }

  openDetailsModal(student: Student) {
    this.selectedStudent = student;
    this.showDetailsModal = true;
  }

  closeDetailsModal() {
    this.selectedStudent = null;
    this.showDetailsModal = false;
  }

  openEditModal(student: Student) {
    this.selectedStudent = student;
    this.showEditModal = true;
  }

  closeEditModal() {
    this.selectedStudent = null;
    this.showEditModal = false;
    this.loadStudents();
  }

  openHistoryModal(student: Student) {
    this.selectedStudent = student;
    this.showHistoryModal = true;
  }

  closeHistoryModal() {
    this.selectedStudent = null;
    this.showHistoryModal = false;
  }

  openAddModal() {
    this.showAddModal = true;
  }

  closeAddModal() {
    this.showAddModal = false;
    this.loadStudents();
  }

  private loadStudents() {
    this.studentsService.getStudents(this.currentPage, this.itemsPerPage)
      .subscribe(response => {
        this.students = response.content;
        this.totalItems = response.totalElements;
      });
  }
}
