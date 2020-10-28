import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Device } from './crud.model';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DatastorageService {
  noPoints:number;
  timer:number=1;
  pointsChanged=new Subject<number>();
  timerChanged=new Subject<number>();
  constructor(private http:HttpClient) { }


  getnoPoints() {
     this.http
      .get(
        
         'https://uniconvergetech-iot-dashbord.herokuapp.com/nopoints',
         
      ).subscribe((noPoints:Object)=>{
        this.noPoints=noPoints["value"];
        // console.log(this.noPoints)
        this.pointsChanged.next(this.noPoints);
      })
  }
  updatenoPoints(no:number) {
     this.http
     .patch(
         'https://uniconvergetech-iot-dashbord.herokuapp.com/nopoints/'+no,
       {value:no}
      ).subscribe((noPoints:Object)=>{
        this.noPoints=noPoints["value"];
        this.pointsChanged.next(this.noPoints);
      })
  }
  updateTimer(no:number) {
    this.timer=no;
    this.timerChanged.next(this.timer);
  }
  storeDevice(device:Device) {
    return this.http
      .post(
          'https://uniconvergetech-iot-dashbord.herokuapp.com/devices',
          device
      )

  }
  fetchLatestDevice(){
    return this.http.get(
       'https://uniconvergetech-iot-dashbord.herokuapp.com/device'
    )
  }
  fetchDevices(){
    // console.log(this.noPoints)
    return this.http.get(
         'https://uniconvergetech-iot-dashbord.herokuapp.com/devices' 
    )
  }

  fetchDevice(_id:string){
    return this.http.get(
        'https://uniconvergetech-iot-dashbord.herokuapp.com/devices/'+_id
    )
  }

  updateDevice(id:string,device:Device){
     return this.http
     .patch(
        'https://uniconvergetech-iot-dashbord.herokuapp.com/devices/'+id,
      device)
  }

  deleteDevice(_id:string){
    return this.http
    .delete(
         'https://uniconvergetech-iot-dashbord.herokuapp.com/devices/'+_id
    )
      
  }

  download(){
    this.http
    .get(
      'https://uniconvergetech-iot-dashbord.herokuapp.com/download'
     ).subscribe();
  }

}
