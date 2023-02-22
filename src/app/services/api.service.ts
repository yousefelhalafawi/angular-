import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private myClient:HttpClient) { }
  private Base_URL = "http://localhost:3000/users";
  GetAllUsers(){
    return this.myClient.get(this.Base_URL,{observe:"body"});
  }
  GetUserByID(id:any){
    return this.myClient.get(this.Base_URL+"/"+id);
  }
  AddNewUser(user:any){
    return this.myClient.post(this.Base_URL, user)
  }
  deleteObject(id: number) {
    return this.myClient.delete(this.Base_URL+"/"+id);
  }
  updateUserByID(data:any,id:any){
    return this.myClient.put(`${this.Base_URL}/${id}`,data );

  }

}
