import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {path:"",redirectTo:"/User", pathMatch:'full'},

  {path:"", loadChildren:()=>import("../app/user-list/user-list.module").then(iser=>iser.UserListModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
