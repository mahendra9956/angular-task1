import { Component } from '@angular/core';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent {

   
//public data="I am Coming From Parent"

public data=[
  {
    name: "Angular",
    fee: 15000
  },
  {
    name:"Mahendra",
    age:25
  }
]
 public message:any
method1(e:any){
this.message=e
}


}



