import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from '../Model/user';
import {map} from 'rxjs/operators';

const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient,
              private httpTeacher: HttpClient) { }


  private urlUsers = 'http://localhost:8080/api/user/users';

  private urlTeachers = 'http://localhost:8080/api/user/students';

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  getStudents(): Observable<User[]>{
    return this.httpTeacher.get<User[]>(this.urlTeachers).pipe(
      map(response => response)
    );
  }
  // tslint:disable-next-line:typedef
  removeStudent(id: number){
    return this.httpTeacher.delete(this.urlUsers + `?id=${id}`);
  }
  // tslint:disable-next-line:typedef
  addStudent(user: User){
    return this.httpTeacher.post(this.urlUsers, user);
  }
  getStudent(id: number): Observable<User>{
    return this.httpTeacher.get<User>(`http://localhost:8080/api/user/user?id=${id}`).pipe(
      map(response => response)

    );
  }
  // tslint:disable-next-line:typedef
  editStudent(user: User, id: number){
    return this.httpTeacher.put(`http://localhost:8080/api/user/usersUp?id=${id}`, user);

  }
}


