import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControlName, Validators, FormControl } from '@angular/forms';
import { CrudService } from '../crud.service';
import { DatastorageService } from 'src/app/datastorage.service';
import { Device } from '../crud.model';
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-c-edit',
  templateUrl: './c-edit.component.html',
  styleUrls: ['./c-edit.component.scss']
})
export class CEditComponent implements OnInit {
  index:number;
  _id:string
  editMode=false;
  crudForm:FormGroup;
  constructor(private router :Router,private route:ActivatedRoute,
    private crudService:CrudService,private dataStorageService:DatastorageService) { }
  onCancel(){
    this.router.navigate(['../'],{relativeTo:this.route});
  }
  onSubmit(){
    if(this.editMode){
      //console.log('edit started')
      this.crudService.updateDevice(this.index,this.crudForm.value)
    }
    else{
      this.crudService.addDevice(this.crudForm.value)
    }
    this.onCancel()
  }
  ngOnInit(): void {
    console.log('inside ceC')
    this.route.params.subscribe(
      (params:Params)=>{
        this.index=params['id']
        this.editMode=params['id']!=null;
        this.initForm();
      }
    )
  }
  private initForm(){
    let name ='';
    let modelNo='';
    let location='';
    let runTime;
    let status='';
    let temperature;
    let humidity;
    let solarVoltage;
    let batteryVoltage;
    let imagePath='https://www.lifewire.com/thmb/3MdpNca9mSpjQkV_GQDq8l16xTo=/1650x1275/filters:fill(auto,1)/cortana-5b579fe74cedfd004bdf0193.jpg';
    let _id;
    if(this.editMode){
      let device = this.crudService.getDevice(this.index)
      name=device.name;
      modelNo=device.modelNo;
      location=device.location;
      runTime=device.runTime;
      status=device.status[0];
      temperature=device.temperature[4];
      humidity=device.humidity[4];
      solarVoltage=device.solarVoltage[4];
      batteryVoltage=device.batteryVoltage[4];
      imagePath=device.imagePath
      _id=device._id
    }
    this.crudForm= new FormGroup({
      name: new FormControl(name,Validators.required),
      modelNo:new FormControl(modelNo,Validators.required),
      location:new FormControl(location),
      runTime:new FormControl(runTime),
      // status:new FormControl(status),
      // temperature: new FormControl(temperature),
      // humidity:new FormControl(humidity),
      // solarVoltage:new FormControl(solarVoltage),
      // batteryVoltage: new FormControl(batteryVoltage),
       imagePath:new FormControl(imagePath),
      //_id:new FormControl(_id)
    })
  }
  
}
