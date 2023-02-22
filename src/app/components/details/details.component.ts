import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  id=1;  user:any;

  constructor(public myService:ApiService,private route: ActivatedRoute){}


  // route: any;
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

}
