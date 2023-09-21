import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListRoutingModule } from './user-list-routing.module';
import { UserTableComponent } from './user-table/user-table.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ToastrModule } from 'ngx-toastr';
import { UPdateDialogComponent } from './user-table/update-dialog/update-dialog.component';
import { DeleteDialogComponent } from './user-table/delete-dialog/delete-dialog.component';



@NgModule({
  declarations: [
    UserTableComponent,
    UPdateDialogComponent,
    DeleteDialogComponent,
   
  ],
  imports: [
    CommonModule,
    UserListRoutingModule,
    AngularMaterialModule,
    ToastrModule
  ]
})
export class UserListModule { }
