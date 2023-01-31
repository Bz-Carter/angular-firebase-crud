import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'students', 
    loadChildren: () => import('./students/students.module').then(m => m.StudentsModule)
  },
  {
    path: 'users', 
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'classes', 
    loadChildren: () => import('./classes/classes.module').then(m => m.ClassesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
