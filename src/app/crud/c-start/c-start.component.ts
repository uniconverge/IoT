import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Device } from '../crud.model';

@Component({
  selector: 'app-c-start',
  templateUrl: './c-start.component.html',
  styleUrls: ['./c-start.component.scss']
})
export class CStartComponent implements OnInit {
  noDevice:boolean
  constructor(private crudService:CrudService) { }

  ngOnInit(): void {
    console.log('inside csC')
    this.crudService.cValuesChanged.subscribe(
    (devices:Device[])=>{
      this.noDevice =devices.length==0?true:false
    }
    )
  }

}
