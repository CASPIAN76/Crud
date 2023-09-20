import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListRoutingModule } from './user-list-routing.module';
import { UserTableComponent } from './user-table/user-table.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';



@NgModule({
  declarations: [
    UserTableComponent,
   
  ],
  imports: [
    CommonModule,
    UserListRoutingModule,
    AngularMaterialModule
  ]
})
export class UserListModule { }
