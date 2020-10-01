import { Injectable, OnInit } from '@angular/core';
import { Device } from '../crud.model';
import {  AlerthrModel } from './alert.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlertService implements OnInit {
  devices:Device[]
  alertArray:Array<object>=[]
  alerthr:AlerthrModel;


  constructor(public http:HttpClient) { }
 



  public init(){
    this.alertArray=[]
    //  console.log(this.alerthr)
    for(var i=0;i<this.devices.length;i++){
      if(this.devices[i].temperature[0]<this.alerthr.temperature && this.devices[i].temperature[0]!=null){ this.alertArray.push({name:this.devices[i].name,type:"temperature",val:this.devices[i].temperature[0]})}
      if(this.devices[i].humidity[0]<this.alerthr.humidity && this.devices[i].humidity[0]!=null){   this.alertArray.push({name:this.devices[i].name,type:"humidity",val:this.devices[i].humidity[0]})}
      if(this.devices[i].solarVoltage[0]<this.alerthr.solarvoltage && this.devices[i].solarVoltage[0]!=null){   this.alertArray.push({name:this.devices[i].name,type:"solarVoltage",val:this.devices[i].solarVoltage[0]})}
      if(this.devices[i].batteryVoltage[0]<this.alerthr.batteryvoltage && this.devices[i].batteryVoltage[0]!=null){   this.alertArray.push({name:this.devices[i].name,type:"batteryVoltage",val:this.devices[i].batteryVoltage[0]})}
    }
  }

  findAlerts(devices:Device[]){
    this.devices=devices;
    this.init()
    return this.alertArray;
  }


  fetchAlerthr(){
    this.http
      .get(
            'https://localhost:3000/alert'
          ).subscribe((alerthr:AlerthrModel[])=>{
            this.alerthr=alerthr[0];
          })
    
      
  }

  updateAlerthr(alerthr:AlerthrModel){
    this.http
      .patch(
       'https://localhost:3000/alert/'+this.alerthr._id,
      alerthr
      ).subscribe((alert:AlerthrModel)=>{
        this.alerthr=alert;
      })
  }

  ngOnInit(){   
    this.fetchAlerthr();
  }


}
