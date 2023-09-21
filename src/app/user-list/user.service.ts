import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private _http:HttpClient) { }

api = environment?.apiUrl

 dataSubject= new BehaviorSubject<boolean>(false);

changeState(value:boolean){
this.dataSubject.next(value)
}

addUser(body:any){
return this._http.post(`${this.api}add`, body)
}


getUserList(){
  return this._http.get(`${this.api}userList`)
}


deleteUser(id:string){
return this._http.delete(`${this.api}${id}`)
}


updateUser(id:string, body:any){
return this._http.patch(`${this.api}update/${id}`, body)
}

}
