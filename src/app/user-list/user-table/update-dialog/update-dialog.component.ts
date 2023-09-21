import { Component , Inject } from '@angular/core';
import { UserService } from '../../user.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
 
})
export class UPdateDialogComponent {

  formData:any
  constructor(private _ser:UserService,private toastr:ToastrService  ,
    public dialogRef:MatDialogRef<UPdateDialogComponent> ,@Inject(MAT_DIALOG_DATA) public data:MatDialog, 
    ){
  }
  
  
  update(){
   
    
    this.formData = this.data

 this._ser.updateUser(this.formData.id,this.formData.formvalue).subscribe((result:any)=>{
    
      if(result.code ===200){
  
        this.toastr.success('Success', result.status, {progressBar:true});
      }
      if(result.code===400){
        this.toastr.error('Error', result.status, {progressBar:true});
      }
   
      this.dialogRef.close(true)
    },err=>{
      this.toastr.error('Error', err.Error.message, {progressBar:true});
    })

  }
  
}
