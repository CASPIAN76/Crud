import { Component , Inject,OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
  imports:[CommonModule,MatButtonModule, ReactiveFormsModule,MatSelectModule,FormsModule,
     MatCardModule,MatDatepickerModule,MatNativeDateModule,
  MatDialogModule, MatFormFieldModule, MatInputModule,MatGridListModule,
   MatIconModule],
  standalone:true
})
export class AddUserComponent implements OnInit {
  valuse:any;
  submited=false
  addUser: FormGroup=new FormGroup({})
constructor( public dialogRef: MatDialogRef<AddUserComponent>, @Inject(MAT_DIALOG_DATA) public data: MatDialog,private _fb:FormBuilder){
this.valuse=this.data
}


ngOnInit(): void {
this.addUser=this._fb.group({
  fname:new FormControl("", [Validators.required]),
  lname:new FormControl("", [Validators.required]),
  email:new FormControl("", [Validators.required]),
  age:new FormControl("", [Validators.required]),
  city:new FormControl("", [Validators.required]),
  state:new FormControl("", [Validators.required]),
  dob:new FormControl("", [Validators.required]),
  gender:new FormControl("", [Validators.required])

})
}


get hasError(){
return this.addUser.controls  
}

addNew(){

if(this.addUser.invalid){
  this.submited=true;
  return
}
else{
  console.log(this.addUser.value);
  this.dialogRef.close()
}
}


}



