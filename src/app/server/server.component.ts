import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: ['P { color: blue}']
})
export class ServerComponent implements OnInit {
  userName= '';
  allowSubmit = false;

  constructor() { }

  ngOnInit() {
  }

  resetAgreement(){
    this.userName = '';
    this.allowSubmit = false;
  }

  onUpdateUsername(event: Event){
    this.allowSubmit = (((<HTMLInputElement>event.target).value.length) > 0);
    
    
    } 
  }

