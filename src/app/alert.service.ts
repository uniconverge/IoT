import { Injectable, OnInit } from '@angular/core';
import { Device } from './crud.model';
import { CrudService } from './crud.service';
import {  Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService implements OnInit {
  devices:Device[]
  alertArray:Array<object>=[]
  //alertChanged=new Subject<Array<any>>()
  threshTemp:30
  threshHum:15
  threshSv:3
  threshBv:5
  tc:number=0
  ts:number=0
  constructor(private crudServices:CrudService) { }
  public init(){
    this.alertArray=[]
    for(var i=0;i<this.devices.length;i++){
      // console.log(this.devices[i].temperature[0])
      if(this.devices[i].temperature[0]<5){ this.alertArray.push({name:this.devices[i].name,type:"temperature",val:this.devices[i].temperature[0]})}
      if(this.devices[i].humidity[0]<5){   this.alertArray.push({name:this.devices[i].name,type:"humidity",val:this.devices[i].humidity[0]})}
      if(this.devices[i].solarVoltage[0]<3){   this.alertArray.push({name:this.devices[i].name,type:"solarVoltage",val:this.devices[i].solarVoltage[0]})}
      if(this.devices[i].batteryVoltage[0]<3){   this.alertArray.push({name:this.devices[i].name,type:"batteryVoltage",val:this.devices[i].batteryVoltage[0]})}
    }
  }

  findAlerts(devices:Device[]){
  //  console.log(devices)
    this.devices=devices;
    this.init()
    //console.log(this.alertArray)
    return this.alertArray;
  }
  ngOnInit(){    
  }
}
