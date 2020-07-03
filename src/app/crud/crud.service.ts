import { Injectable, OnInit } from '@angular/core';
import {Device} from './crud.model';
import { Subject } from 'rxjs';
import { DatastorageService } from '../shared/datastorage.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService implements OnInit {
  cValuesChanged =new Subject<Device[]>()
  devices:Device[]=[];

  constructor(private http:HttpClient,private dataStorageService:DatastorageService){ 
  }
  ngOnInit(){
    console.log('inside csC')
    
  }
  // serviceStart(){
  //   this.dataStorageService.fetchDevices().subscribe((devices:Device[])=>{
  //     this.devices=devices;
  //   })
  // }
  getDevices(){
    return this.devices.slice();
  }
  getDevice(index:number){
    return this.devices[index];
  }
  onRefresh(devices:Device[]){
    this.devices=devices
    this.cValuesChanged.next(this.devices.slice())
  }

  addDevice(device:Device){
    this.devices.splice(0,0,device);
    this.dataStorageService.storeDevice(device).subscribe((device:Device)=>{
      this.devices.splice(0,1)
      this.devices.splice(0,0,device)
      this.cValuesChanged.next(this.devices.slice())
    })
    this.cValuesChanged.next(this.devices.slice())
  }
  updateDevice(index:number,device:Device){
    let _id =device._id
    this.devices[index]=device
    this.cValuesChanged.next(this.devices.slice())
    this.dataStorageService.updateDevice(_id,device).subscribe((device:Device)=>{
        this.devices[index]=device;
        this.cValuesChanged.next(this.devices.slice())
    })
  }

  deleteDevice(index:number){
    let _id =this.devices[index]._id
    this.devices.splice(index, 1);
    this.cValuesChanged.next(this.devices.slice())
    this.dataStorageService.deleteDevice(_id)
    console.log(this.devices)
  }

}


