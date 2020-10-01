import { Component, Input, OnInit } from '@angular/core';
import { Device } from 'src/app/crud.model';
import { Sensor } from '../sensor.model';
import { SensordatastorageService } from '../sensordatastorage.service';

@Component({
  selector: 'app-each-device',
  templateUrl: './each-device.component.html',
  styleUrls: ['./each-device.component.scss']
})
export class EachDeviceComponent implements OnInit {
  @Input()device:Device;
  @Input()fsize:number;
  okay:boolean=false;
  constructor(public sensorDataService:SensordatastorageService) { }
  sensor:Sensor;
  ngOnInit(): void {
    this.sensorDataService.fetchSensorOne(this.device._id).subscribe((sensor:Sensor)=>{
      this.sensor=sensor;
      this.okay=true;
    })
  }

  onEnableTemp(){
    this.okay=false;
    this.sensor.temperature=true;
    this.sensorDataService.updateSensor(this.device._id,this.sensor).subscribe((sensor:Sensor)=>{
      this.sensor=sensor;
      this.okay=true;
    })
  }
  onDisableTemp(){
    this.okay=false;
    this.sensor.temperature=false;
    this.sensorDataService.updateSensor(this.device._id,this.sensor).subscribe((sensor:Sensor)=>{
      this.sensor=sensor;
      this.okay=true;
    })
  }
  onEnableHum(){
    this.okay=false;
    this.sensor.humidity=true;
    this.sensorDataService.updateSensor(this.device._id,this.sensor).subscribe((sensor:Sensor)=>{
      this.sensor=sensor;
      this.okay=true;
    })
  }
  onDisableHum(){
    this.okay=false;
    this.sensor.humidity=false;
    this.sensorDataService.updateSensor(this.device._id,this.sensor).subscribe((sensor:Sensor)=>{
      this.sensor=sensor;
      this.okay=true;
    })
  }
  onEnableSv(){
    this.okay=false;
    this.sensor.solarvoltage=true;
    this.sensorDataService.updateSensor(this.device._id,this.sensor).subscribe((sensor:Sensor)=>{
      this.sensor=sensor;
      this.okay=true;
    })
  }
  onDisableSv(){
    this.okay=false;
    this.sensor.solarvoltage=false;
    this.sensorDataService.updateSensor(this.device._id,this.sensor).subscribe((sensor:Sensor)=>{
      this.sensor=sensor;
      this.okay=true;
    })
  }
  onEnableBv(){
    this.okay=false;
    this.sensor.batteryvoltage=true;
    this.sensorDataService.updateSensor(this.device._id,this.sensor).subscribe((sensor:Sensor)=>{
      this.sensor=sensor;
      this.okay=true;
    })
  }
  onDisableBv(){
    this.okay=false;
    this.sensor.batteryvoltage=false;
    this.sensorDataService.updateSensor(this.device._id,this.sensor).subscribe((sensor:Sensor)=>{
      this.sensor=sensor;
      this.okay=true;
    })
  }

}
