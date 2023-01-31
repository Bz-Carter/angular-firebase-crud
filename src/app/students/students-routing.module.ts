import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { StudentsComponent } from './students.component';

const routes: Routes = [
  {
    path: 'students', 
    component: StudentsComponent,
    children: [
      { path: '', redirectTo: '/register-student', pathMatch: 'full' },
      { path: 'register-student', component: AddComponent },
      { path: 'view-students', component: ListComponent },
      { path: 'edit-student/:id', component: EditComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
