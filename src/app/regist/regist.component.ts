import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.scss']
})
export class RegistComponent implements OnInit {
  ok:boolean
  constructor(private crudService:CrudService) { }

  ngOnInit(): void {
    this.ok=this.crudService.ok;
    this.crudService.okStatusChanged.subscribe((ok:boolean)=>{
      this.ok=ok;
    });
  }

}
