import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  width_amount=0;
  constructor() { }

  ngOnInit(): void {
    console.log('inside cC')
    
  }
  openNav(){
    this.width_amount=250;
  }
}
