import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Device } from '../crud.model';

@Component({
  selector: 'app-param-analyse',
  templateUrl: './param-analyse.component.html',
  styleUrls: ['./param-analyse.component.scss']
})
export class ParamAnalyseComponent implements OnInit {
  devices:Device[];
  param:string="temperature";
  okay:boolean=false;
 // dataset:Number[][];
  constructor(private crudService:CrudService) { }

  ngOnInit(): void {
    //this.dataset=this.devices.map((item)=>{return item[this.param].reverse()})
    this.crudService.cValuesChanged.subscribe((devices:Device[])=>{
      this.devices=devices;
      this.okay=true;
      // this.dataset=this.devices.map((item)=>{return item[this.param].reverse()})
    })
  }
  onTemp(){this.param="temperature"}
  onHum(){this.param="humidity"}
  onSv(){this.param="solarVoltage"}
  onBv(){this.param="batteryVoltage"}

}
