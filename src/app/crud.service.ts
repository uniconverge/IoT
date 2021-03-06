import { Injectable, OnInit } from '@angular/core';
import {Device} from './crud.model';
import { Subject } from 'rxjs';
import { DatastorageService } from './datastorage.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService implements OnInit {
  cValuesChanged =new Subject<Device[]>()
  okStatusChanged =new Subject<boolean>()
  devices:Device[]=[];
  ok=true
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
   // this.devices.splice(0,0,device);
    this.ok=false
    this.okStatusChanged.next(this.ok);
    console.log(device)
    this.dataStorageService.storeDevice(device).subscribe(()=>{
      // this.devices.splice(0,1)
      // this.devices.splice(0,0,device)
      // this.cValuesChanged.next(this.devices.slice())
      this.ok=true
      this.okStatusChanged.next(this.ok);
    
    })
   // this.cValuesChanged.next(this.devices.slice())
  }
  updateDevice(index:number,device:Device){
    // console.log(dev)
      //this.devices[index]._id
      // this.cValuesChanged.next(this.devices.slice())
    this.ok=false
    this.okStatusChanged.next(this.ok);
    console.log(this.devices[index]._id)
    console.log(device)
    this.dataStorageService.updateDevice( this.devices[index]._id,device).subscribe(()=>{
        // this.devices[index]=device;
        // this.cValuesChanged.next(this.devices.slice())
        //console.log(device)
        this.ok=true
        this.okStatusChanged.next(this.ok);
    })
  }

  deleteDevice(index:number){
    let _id =this.devices[index]._id
    this.ok=false
    this.okStatusChanged.next(this.ok);
    this.dataStorageService.deleteDevice(_id).subscribe(()=>{
      this.ok=true
      this.okStatusChanged.next(this.ok);
    })
    console.log(this.devices)
  }

}
