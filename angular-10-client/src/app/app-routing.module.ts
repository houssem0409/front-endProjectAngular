import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import {TeacherComponent} from './teacher/teacher.component';
import {StudentComponent} from './student/student.component';
import {StdOptionsComponent} from './std-options/std-options.component';
import {LoginActivatedService} from './_services/login-activated.service';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouteActivatedService} from './_services/route-activated-service.service';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent , canActivate: [LoginActivatedService] },
  { path: 'register', component: RegisterComponent  , canActivate: [LoginActivatedService]},
  { path: 'profile', component: ProfileComponent , canActivate: [RouteActivatedService] },
  { path: 'user', component: BoardUserComponent },
  { path: 'teacherManagment', component: TeacherComponent , canActivate : [RouteActivatedService] },
  { path: 'studentManagment', component: StudentComponent },
  {path: 'control', component: StdOptionsComponent },
  {path: 'control/:id', component: StdOptionsComponent },
  { path: 'mod', component: BoardModeratorComponent  },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule],
  exports: [RouterModule],

})
export class AppRoutingModule { }
