import { Component, OnInit } from '@angular/core';
import {User} from '../Model/user';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../_services/user.service';
import {StudentService} from '../_services/student.service';
import {Student} from '../Model/student';
import {isPresentationRole} from 'codelyzer/util/isPresentationRole';

@Component({
  selector: 'app-std-options',
  templateUrl: './std-options.component.html',
  styleUrls: ['./std-options.component.css']
})
export class StdOptionsComponent implements OnInit {

  // @ts-ignore
  studentService: StudentService;
  StudentGroup: FormGroup;
  // @ts-ignore
  id: number;
  // @ts-ignore
  myStudent: Student = new Student(0, '', '', '', '');
  constructor(private fromBuilder: FormBuilder,
              private userService: UserService,
              private router: Router,
              private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // @ts-ignore
    this.id = +this.route.snapshot.paramMap.get('id');
    alert(this.id);
    // tslint:disable-next-line:triple-equals
    if (this.id != 0){
      // @ts-ignore
      this.studentService.getStudent(this.id).subscribe(
        response => {
          this.myStudent = response;

        }

      );
    }

    this.StudentGroup = this.fromBuilder.group(
      {student : this.fromBuilder.group(
          {
            email : [this.myStudent.email],
            password: [this.myStudent.password],
            username : [this.myStudent.username]



          }
        )
      }
    );
  }
  // tslint:disable-next-line:typedef
  getEmail(){
    return this.StudentGroup.get('student')?.value.email;

  }
  // tslint:disable-next-line:typedef
  getPassword(){
    return this.StudentGroup.get('student')?.value.password;

  }
  // tslint:disable-next-line:typedef
  getUsername(){
    return this.StudentGroup.get('student')?.value.username;

  }

  // tslint:disable-next-line:typedef
  getRole(){
    return this.StudentGroup.get('student')?.value.role;
  }


  // tslint:disable-next-line:typedef
  done() {

    // @ts-ignore
    // tslint:disable-next-line:max-line-length
    const stu = new Student(this.id, this.getEmail(), this.getPassword(), this.getUsername(), this.getRole());
    // tslint:disable-next-line:triple-equals
    if (this.id == 0){
      this.studentService.addStudent(stu).subscribe(
        response => {
          this.router.navigateByUrl('/studentManagment');
        }
      );
    }else {
      // @ts-ignore
      this.studentService.editStudent(stu, this.id).subscribe(
        response => {
          this.router.navigateByUrl('/studentManagment');
        }
      );
    }


  }
}
