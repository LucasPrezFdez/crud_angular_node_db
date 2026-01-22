import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private http = inject(HttpClient);

  private readonly API_URL = 'http://localhost:3000/students';

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.API_URL);
  }
}
