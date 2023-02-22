import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  id=1;  user:any;
  constructor(public myService:ApiService,private route: ActivatedRoute){}
  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.myService.GetUserByID(this.id).subscribe({
      next:(res)=>{
        console.log(res)
        this.user = res;
      },
      error:(err)=>{console.log(err)}
    })
  }
  add(name:any, email:any, age:any, phone:any){
    let user = {name, age, email, phone};
    this.myService.updateUserByID(user,this.id).subscribe();
    window.location.href = 'http://localhost:4200/';
  }

  }
