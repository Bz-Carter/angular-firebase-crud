import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    UsersComponent,
    AddComponent,
    ListComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
