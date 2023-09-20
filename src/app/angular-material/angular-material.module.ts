import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';



const AngularMaterial = [
  MatDatepickerModule,
  MatNativeDateModule,
  MatListModule,
  MatTableModule,
  MatTabsModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatSelectModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatRadioModule,
  MatToolbarModule,
  MatIconModule,
  MatDialogModule,
  MatSortModule,
  MatMenuModule,
  MatExpansionModule,
  MatSortModule,
  MatBadgeModule,
  MatPaginatorModule
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularMaterial
  ],
  exports:[
    AngularMaterial
  ]

})
export class AngularMaterialModule { }
