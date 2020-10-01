import { Component, OnInit, HostListener } from '@angular/core';
import { CrudService } from '../crud.service';
import { AlertService } from './alert.service';
import { Device } from '../crud.model';
import { AlerthrModel } from './alert.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-alert-disp',
  templateUrl: './alert-disp.component.html',
  styleUrls: ['./alert-disp.component.scss']
})
export class AlertDispComponent implements OnInit {
  okay:boolean=false
  devices:Device[]
  alertArray:Array<any>
  alerthr:AlerthrModel;

  innerWidth:number
  @HostListener('window:resize', ['$event'])
  fsize:number
  onResize(event) {
    this.innerWidth = window.innerWidth;

  }
  constructor(private crudServce:CrudService,private alertService:AlertService,private http:HttpClient) { }


  alertForm:FormGroup;

  private initForm(){
    let temperature=this.alerthr.temperature;
    let humidity=this.alerthr.humidity;
    let solarvoltage=this.alerthr.solarvoltage;;
    let batteryvoltage=this.alerthr.batteryvoltage;;
    this.alertForm= new FormGroup({
      temperature: new FormControl(temperature),
      humidity:new FormControl(humidity),
      solarvoltage:new FormControl(solarvoltage),
      batteryvoltage:new FormControl(batteryvoltage),
    })
  }

  onSubmit(){
    this.okay=false;
    this.alertService.updateAlerthr(this.alertForm.value)
    setTimeout(()=>{
      this.okay=true;
    },10000)
  }
  
  ngOnInit(): void {
    this.http
      .get(
          'https://alenthankz-iot-api.herokuapp.com/alert'
          //  'https://localhost:3000/alert'
          ).subscribe((alerthr:AlerthrModel[])=>{
            this.alerthr=alerthr[0];
            this.initForm();
            this.okay=true;
          })
    this.alertService.fetchAlerthr();
    this.crudServce.cValuesChanged.subscribe((devices:Device[])=>{
      this.okay=true;
      this.devices=devices;
       this.alertArray=this.alertService.findAlerts(devices)
      }
     )
    this.innerWidth = window.innerWidth;
  }

  
}
