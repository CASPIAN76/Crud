import { Component , Inject,OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ToastrService, provideToastr } from 'ngx-toastr';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { UserService } from '../../user.service';
import { ToastrModule } from 'ngx-toastr';
import { UPdateDialogComponent } from '../update-dialog/update-dialog.component';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
  imports:[CommonModule,MatButtonModule, ReactiveFormsModule,MatSelectModule,FormsModule,
     MatCardModule,MatDatepickerModule,MatNativeDateModule,ToastrModule,
  MatDialogModule, MatFormFieldModule, MatInputModule,MatGridListModule,
   MatIconModule],
  standalone:true,

})
export class AddUserComponent implements OnInit {
  valuse:any;
  submited=false
  addUser: FormGroup=new FormGroup({});
  formValue:any
constructor( public dialogRef: MatDialogRef<AddUserComponent>, @Inject(MAT_DIALOG_DATA) public data: MatDialog,
private toastr: ToastrService,private matdialog:MatDialog,
private _fb:FormBuilder, private _ser:UserService){
this.valuse=this.data;
  
  }
  
  
  ngOnInit(): void {
    this.addUser=this._fb.group({
      fname:new FormControl("", [Validators.required, ]),
      lname:new FormControl("", [Validators.required]),
      email:new FormControl("", [Validators.required, Validators.email]),
      age:new FormControl("", [Validators.required, Validators.min(1)]),
      city:new FormControl("", [Validators.required]),
      state:new FormControl("", [Validators.required]),
      dob:new FormControl("", [Validators.required]),
      gender:new FormControl("", [Validators.required])
      
    })
    this.addUser.patchValue(this.valuse.data)
}


get hasError():any{
return this.addUser.controls 
}

addNew(){

if(this.addUser.invalid){
  this.submited=true;
  return
}
else{

  this._ser.addUser(this.addUser.value).subscribe((result:any)=>{

    if(result.code ===200){

      this.toastr.success('Success', result.Massage, {progressBar:true});
    }
    if(result.code===400){
      this.toastr.error('Error', result.status, {progressBar:true});
    }
  },err=>{
    this.toastr.error('Error', err.Error.message, {progressBar:true});
  })
  this.dialogRef.close(true)
}
}


/// for update


update(){
  if(this.addUser.invalid){
    this.submited=true;
    return
  }
  else{
    const model = this.matdialog.open(UPdateDialogComponent,{
      data:{formvalue:this.addUser.value, id:this.valuse.data._id},
  
    })
    model.afterClosed().subscribe((res)=>{
     this.dialogRef.close()
       this._ser.changeState(res)
    })
   
  }
}


}



