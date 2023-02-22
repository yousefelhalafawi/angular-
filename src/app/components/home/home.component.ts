import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public myService:ApiService ){}
  users:any;
  detailsById(id:any){

  }
  updatebyId(id:any){}
  deleteById(id:any){
this.myService.deleteObject(id).subscribe({});
window.location.reload();


  }
  ngOnInit(): void {

    this.myService.GetAllUsers().subscribe({
      next:(res)=>{
        // console.log(res)
        this.users = res;
      },
      error:(err)=>{console.log(err)}
    })
  }
}
