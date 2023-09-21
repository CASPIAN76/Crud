import { Component , Inject} from '@angular/core';
import { UserService } from '../../user.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',

})
export class DeleteDialogComponent {
  id:any
  constructor(private _ser:UserService,private toast:ToastrService ,public dialogRef:MatDialogRef<DeleteDialogComponent> ,@Inject(MAT_DIALOG_DATA) public data:MatDialog){
  
    this.id= this.data
  }


  delete(){
this._ser.deleteUser(this.id).subscribe((result:any)=>{
  if(result.code == 200){
this.toast.success("Success", result.status, {progressBar:true})
  }

  this.dialogRef.close(true)
}, err=>{
  this.toast.error("Error", "Somthing went wrong", {progressBar:true})
})
  }

}
