import { Component, OnInit, Input } from '@angular/core';
import { DatastorageService } from '../../shared/datastorage.service';
import { Device } from '../crud.model';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { CrudService } from '../crud.service';
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  device:Device
  index:number
  

  
  constructor(private datastorageservice:DatastorageService,private router:Router,private route:ActivatedRoute,
    private crudService:CrudService) {  }


  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{
          this.index =params['id']
           this.device=this.crudService.getDevice(this.index);
           this.crudService.cValuesChanged.subscribe((devices:Device[])=>{
             this.device=devices[this.index]
           })
           this.chartDatasetsl1=[{data:this.device.temperature,label:'Temperature'}]
           this.chartDatasetsl2=[{data:this.device.humidity,label:'Humidity'}]
           this.chartDatasetsl3=[{data:this.device.solarVoltage,label:'Solar Voltage'}]
           this.chartDatasetsl4=[{data:this.device.batteryVoltage,label:'Battery Voltage'}]
      })
  }

  
  onGoBack(){
    this.router.navigate(['../'],{relativeTo:this.route})
  }





  public chartTypel: string = 'line';

  public chartDatasetsl1: Array<any> 
  public chartDatasetsl2: Array<any> 
  public chartDatasetsl3: Array<any> 
  public chartDatasetsl4: Array<any> 

  public chartLabelsl: Array<any> = ['4 min ago','3 min ago','2 min ago',' 1 min ago',' now'];
  public chartColorsl1: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(233, 30, 99, 0.7)',
      borderWidth: 2,
    },
  ];
  public chartColorsl2: Array<any> = [
    {
      backgroundColor: 'rgba(0, 188, 212, 0.7)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    }
  ];
  public chartColorsl3: Array<any> = [
    {
      backgroundColor: 'rgba(76, 175, 80, 0.7)',
      borderColor: 'rgba(0, 150, 136, 0.7)',
      borderWidth: 2,
    }
  ];
  public chartColorsl4: Array<any> = [
    {
      backgroundColor: 'rgba(255, 235, 59, 0.7)',
      borderColor: 'rgba(255, 152, 0, 0.7)',
      borderWidth: 2,
    }
  ];

  public chartOptionsl: any = {
    responsive: true
  };
  public chartClickedl(e: any): void { };
  public chartHoveredl(e: any): void { };
}
