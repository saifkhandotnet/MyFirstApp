import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  logs=[];
  showOriginal = true;
  rowColor='white';

  constructor() { }

  ngOnInit() {
  }

  toggleText(){
    this.showOriginal = !this.showOriginal;
    this.logs.push('the button was clicked at' + new Date());
    //if this.logs.length > 5 : 
  }

  
}
