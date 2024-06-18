import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dashbord-child',
  templateUrl: './dashbord-child.component.html',
  styleUrls: ['./dashbord-child.component.css']
})
export class DashbordChildComponent {

  @Input() res:any
  
 @Output() event1:any = new EventEmitter()

 public item=[
  {
    name:"React",
    fee:18000
  }
 ]

 send1(){
this.event1.emit(this.item)
 }
}


