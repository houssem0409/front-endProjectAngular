import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../Model/user';
import {map} from 'rxjs/operators';
import {Student} from '../Model/student';
import {AuthService} from './auth.service';
import {TokenStorageService} from './token-storage.service';
import {serialize} from "@angular/compiler/src/i18n/serializers/xml_helper";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private handleError: any;
  header: HttpHeaders;
  constructor(private http: HttpClient,
              private httpStudent: HttpClient,
              private authService: AuthService,
              private tokenStorage: TokenStorageService) {
    const token = sessionStorage.getItem('auth-token');
    this.header = new HttpHeaders().set('Authorization' , 'Bearer ' + token)
      .set('Content-Type' , 'application/json');
    console.log('kkkkkkkk' + this.header.get('Authorization'));
  }

  private urlStudents = 'http://localhost:8080/api/student/students';

  getStudents(): Observable<Student[]>{
    // let jwt = sessionStorage.getItem("auth-user");
    // //jwt = "Bearer "+jwt;
    // console.log();
    // const httpHeaders = new HttpHeaders({"Authorization" : jwt});
    console.log('kkkkkkkk' + this.header.get('Authorization'));
    console.log('kkkkkkkk' + this.urlStudents);
    // @ts-ignore

    return this.httpStudent.get(this.urlStudents, {headers:  this.header.get('Authorization')});
  }
/*
  getStudents(): Observable<Student[]>  {
    const headers = new Headers();
    const tokenParse = JSON.parse(this.tokenStorage.getToken());
    headers.append('Authorization', `Bearer ${tokenParse}`);
    // @ts-ignore
    const opts = new RequestOptions({ headers });
    console.log(JSON.stringify(opts));
    const students = this.http.get<Student[]>(this.urlStudents, opts);
    return students
      .catch(this.handleError.handleError);
  }
  */

  // tslint:disable-next-line:typedef
  removeStudent(id: number){
    return this.httpStudent.delete(this.urlStudents + `?id=${id}`);
  }
  // tslint:disable-next-line:typedef
  addStudent(student: Student){
    return this.httpStudent.post(this.urlStudents, student);
  }
  getStudent(id: number): Observable<Student>{
    return this.httpStudent.get<User>(`http://localhost:8080/api/student/student?id=${id}`).pipe(
      map(response => response)

    );
  }
  // tslint:disable-next-line:typedef
  editStudent(student: Student, id: number){
    return this.httpStudent.put(`http://localhost:8080/api/student/studentsUp?id=${id}`, student);

  }
}
