import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Device } from './crud.model';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DatastorageService {
  noPoints:number;
  pointsChanged=new Subject<number>();
  constructor(private http:HttpClient) { }


  getnoPoints() {
     this.http
      .get(
        
         'https://localhost:3000/nopoints',
         
      ).subscribe((noPoints:Object)=>{
        this.noPoints=noPoints["value"];
        // console.log(this.noPoints)
        this.pointsChanged.next(this.noPoints);
      })
  }
  updatenoPoints(no:number) {
     this.http
     .patch(
         'https://localhost:3000/nopoints/'+no,
       {value:no}
      ).subscribe((noPoints:Object)=>{
        this.noPoints=noPoints["value"];
        this.pointsChanged.next(this.noPoints);
      })
  }
  storeDevice(device:Device) {
    return this.http
      .post(
          'https://localhost:3000/devices',
          device
      )

  }
  fetchLatestDevice(){
    return this.http.get(
       'https://localhost:3000/device'
    )
  }
  fetchDevices(){
    console.log(this.noPoints)
    return this.http.get(
         'http://localhost:3000/devices?number=' +this.noPoints
    )
  }

  fetchDevice(_id:string){
    return this.http.get(
        'https://localhost:3000/devices/'+_id
    )
  }

  updateDevice(id:string,device:Device){
     return this.http
     .patch(
        'https://localhost:3000/devices/'+id,
      device)
  }

  deleteDevice(_id:string){
    return this.http
    .delete(
         'https://localhost:3000/devices/'+_id
    )
      
  }


}
