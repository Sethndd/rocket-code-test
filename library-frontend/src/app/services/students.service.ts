import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment/environment';
import { Observable } from 'rxjs';
import { Paginated } from '../model/paginated.model';
import { Student } from '../model/student.model';
import { StudentHistory } from '../model/student-history.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private readonly apiUrl = environment.BASE_URL

  constructor(private readonly http: HttpClient) { }

  getStudents(page: number, size: number): Observable<Paginated<Student>> {
    return this.http.get<Paginated<Student>>(`${this.apiUrl}/students?page=${page}&size=${size}`);
  }

  getHistory(id: number): Observable<Paginated<StudentHistory>> {
    return this.http.get<Paginated<StudentHistory>>(`${this.apiUrl}/students/${id}/loans`);
  }

  editStudent(student: Student): Observable<void> {
    console.log(student)
    return this.http.put<void>(`${this.apiUrl}/students`, { ...student })
  }

  addStudent(student: Student): Observable<void> {
    console.log(student)
    return this.http.post<void>(`${this.apiUrl}/students`, { ...student })
  }
}
