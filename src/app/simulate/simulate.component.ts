import { Component, HostListener, OnInit } from '@angular/core';
import { Device } from '../crud.model';
import { CrudService } from '../crud.service';
import { SensordatastorageService } from './sensordatastorage.service';

@Component({
  selector: 'app-simulate',
  templateUrl: './simulate.component.html',
  styleUrls: ['./simulate.component.scss']
})
export class SimulateComponent implements OnInit {
  innerWidth:number
  @HostListener('window:resize', ['$event'])
  fsize:number
  onResize(event) {
    this.innerWidth = window.innerWidth;
    if(this.innerWidth>=768){
      this.fsize=15;
    }
    else{
      this.fsize=5;
    }

  }
  constructor(public crudService:CrudService,public sensorDataStorage:SensordatastorageService ) { }
  devices:Device[];
  okay:boolean=false;
  ngOnInit(){
   this.innerWidth = window.innerWidth;
   if(this.innerWidth>=768){
    this.fsize=15;
  }
  else{
    this.fsize=5;
  }
   this.devices= this.crudService.getDevices();
   console.log(this.devices)
   this.okay=true;
  //   this.crudService.cValuesChanged.subscribe((devices:Device[])=>{
  //     this.okay=true;
  //     this.devices=devices;
  //   })
  }

}
