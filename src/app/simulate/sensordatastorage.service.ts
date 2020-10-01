import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Sensor } from './sensor.model';

@Injectable({
  providedIn: 'root'
})
export class SensordatastorageService {
  sensorChanged =new Subject<Sensor[]>()
  constructor(private http:HttpClient) { }

  updateSensor(deviceid:string,sensor:Sensor){
    return this.http
    .patch(
      'https://alenthankz-iot-api.herokuapp.com/sensors/'+deviceid,
      // 'https://localhost:3000/sensors/'+deviceid,
     sensor)
    }
  fetchSensors(){
    return this.http.get(
         'http://localhost:3000/sensors'
      )
    }
  fetchSensorOne(deviceid:string){
    return this.http.get(
         'http://localhost:3000/sensors/'+deviceid
      )
    }
}
