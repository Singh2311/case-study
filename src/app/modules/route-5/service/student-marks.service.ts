import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { studentMarks } from 'src/app/model/model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentMarksService {

  constructor(private http:HttpClient) { }


  getStudentMakrs():Observable<studentMarks[]>{
    return this.http.get<studentMarks[]>('assets/data/marks.json').pipe(
      map(res => res as studentMarks[] || [])
    )
  }
}
