import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  constructor(public myService:ApiService){
  }
  add(name:any, email:any, age:any, phone:any){
    let user = {name, age, email, phone};
    this.myService.AddNewUser(user).subscribe();
    window.location.href = 'http://localhost:4200/';

  }}
