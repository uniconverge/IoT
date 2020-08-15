import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/crud.model';
import { CrudService } from 'src/app/crud.service';

@Component({
  selector: 'app-reg-list',
  templateUrl: './reg-list.component.html',
  styleUrls: ['./reg-list.component.scss']
})
export class RegListComponent implements OnInit {
  okay:boolean=false
  devices:Device[];
  constructor(private crudService:CrudService) { }

  ngOnInit(): void {
    this.devices=this.crudService.getDevices()
    this.crudService.cValuesChanged.subscribe((devices:Device[])=>{
      this.okay=true;
      this.devices=devices;
    })
  }

}
