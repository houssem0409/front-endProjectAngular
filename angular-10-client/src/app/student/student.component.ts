import { Component, OnInit } from '@angular/core';

import {Student} from '../Model/student';
import {StudentService} from '../_services/student.service';
import {TokenStorageService} from '../_services/token-storage.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  // @ts-ignore
  students: Student[] ;
  // @ts-ignore
  // tslint:disable-next-line:ban-types
  message: String;
  currentUser: any;


  constructor(private studentService: StudentService,
              private token: TokenStorageService
              ) { }
  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.getStudents();
    console.log(this.getStudents());
  }
  // tslint:disable-next-line:typedef
  getStudents(){

    this.studentService.getStudents().subscribe(
      data => this.students = data
    );
  }
  // tslint:disable-next-line:typedef
  removeStudent(id: number){
    const index = this.students.findIndex(student => student.id === id);
    this.studentService.removeStudent(id).subscribe(
      response => {
        this.students.splice(index, 1),
          this.message = ` Success delete id ${id}`,
          this.showMessage();
      }
    );
  }
  // tslint:disable-next-line:typedef
  showMessage(){
    setTimeout(() => {
      this.message = '';
    }, 3000);
  }

}

