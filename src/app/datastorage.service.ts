import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Device } from './crud.model';
@Injectable({
  providedIn: 'root'
})
export class DatastorageService {

  constructor(private http:HttpClient) { }
  storeDevice(device:Device) {
    return this.http
      .post(
        'https://alenthankz-iot-api.herokuapp.com/devices',
        //'https://localhost:3000/devices',
          device
      )

  }
  fetchLatestDevice(){
    return this.http.get(
      'https://alenthankz-iot-api.herokuapp.com/device'
     // 'https://localhost:3000/device'
    )
  }
  fetchDevices(){
    return this.http.get(
     'https://alenthankz-iot-api.herokuapp.com/devices'
      //'http://localhost:3000/devices'
    )
  }

  fetchDevice(_id:string){
    return this.http.get(
      'https://alenthankz-iot-api.herokuapp.com/devices/'+_id
      //'https://localhost:3000/devices/'+_id
    )
  }

  updateDevice(id:string,device:Device){
     return this.http
     .patch(
       'https://alenthankz-iot-api.herokuapp.com/devices/'+id,
      // 'https://localhost:3000/devices/'+id,
      device)
  }

  deleteDevice(_id:string){
    return this.http
    .delete(
      'https://alenthankz-iot-api.herokuapp.com/devices/'+_id)
      //'https://localhost:3000/devices/'+_id)
      
  }


}
