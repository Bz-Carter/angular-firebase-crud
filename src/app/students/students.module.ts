import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';
// NGX Pagination
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    StudentsComponent,
    AddComponent,
    ListComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StudentsRoutingModule,
    NgxPaginationModule  // Include it in imports array
  ]
})
export class StudentsModule { }
