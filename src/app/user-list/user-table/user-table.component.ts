import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AddUserComponent } from './add-user/add-user.component';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';



@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements AfterViewInit,OnInit{
   ELEMENT_DATA:any=[]
  displayedColumns: string[] = ['First Name', 'Last Name', 'Email', 'Age', "Address","City","State" ,"DOB","Gender","Action"];
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
 constructor(private matdialog:MatDialog, private toastr: ToastrService,private _ser:UserService){

 }

@ViewChild(MatPaginator) paginator!:MatPaginator

ngOnInit(): void {
   this._ser.getUserList().subscribe((result:any)=>{
 
 this.dataSource= result.data
   })
  
}

ngAfterViewInit(): void {
  this.dataSource.paginator =this.paginator
}



openDialog(add:string){
const Model= this.matdialog.open(AddUserComponent,{
  maxWidth:"133vw",
  data:{State:add}
});
Model.afterClosed().subscribe(result=>{
 
  if(result ==true){
    this.ngOnInit()
  }
})

}


view(view:string, element:any){

  const Model= this.matdialog.open(AddUserComponent,{
    maxWidth:"133vw",
    data:{State:view, data:element}
  });
  Model.afterClosed().subscribe(result=>{
   
  })
   
}
edit(edit:string, element:any){
  const Model= this.matdialog.open(AddUserComponent,{
    maxWidth:"133vw",
    data:{State:edit, data:element}
  });
  Model.afterClosed().subscribe(result=>{

    this._ser.dataSubject.subscribe(res=>{
    
      if(res == true){
        this.ngOnInit()
      }
    })
  })
}





  recordDelete(id: string) {

    const modal = this.matdialog.open(DeleteDialogComponent, {
      data: id
    });
    modal.afterClosed().subscribe(result => {

      if (result == true) {
        this.ngOnInit()
      }
    })
  }
}
