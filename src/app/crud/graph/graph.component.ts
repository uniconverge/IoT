import { Component, OnInit, Input, HostListener } from '@angular/core';
import { DatastorageService } from '../../datastorage.service';
import { Device } from '../../crud.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CrudService } from '../../crud.service';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  device:Device
  index:number
  okay:boolean
  mint:number;maxt:number;minh:number;maxh:number;mins:number;maxs:number;minb:number;maxb:number;
  public chartDatasetsl1: Array<any>
  public chartDatasetsl2: Array<any>
  public chartDatasetsl3: Array<any>
  public chartDatasetsl4: Array<any>
  public innerWidth: any;
  fontSize=90

  constructor(private breakPointObserver:BreakpointObserver,private router:Router,private route:ActivatedRoute,
    private crudService:CrudService) {  }
    @HostListener('window:resize', ['$event'])
    onResize(event) {
      this.innerWidth = window.innerWidth;
      if(this.innerWidth<1280){
        this.fontSize=5;
      }
      else{
        this.fontSize=10;
      }
    }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{
        this.index =params['id']
       // console.log(this.index)
        this.device=this.crudService.getDevice(this.index)
        this.crudService.cValuesChanged.subscribe((devices:Device[])=>{
          this.okay=true
          this.device=devices[this.index]
          this.chartDatasetsl1=[{data:this.device.temperature.reverse(),label:'temperature'}]
          // this.chartDatasetsl1=[{data:[1,2],label:'temperature'}]
          this.chartDatasetsl2=[{data:this.device.humidity.reverse(),label:'Humidity'}]
          this.chartDatasetsl3=[{data:this.device.batteryVoltage.reverse(),label:'Battery Voltage'}]
          this.chartDatasetsl4=[{data:this.device.solarVoltage.reverse(),label:'Solar Voltage'}]
          this.mint=this.min(this.device.temperature)
          this.minh=this.min(this.device.humidity)
          this.mins=this.min(this.device.solarVoltage)
          this.minb=this.min(this.device.batteryVoltage)
          this.maxb=this.max(this.device.batteryVoltage)
          this.maxt=this.max(this.device.temperature)
          this.maxs=this.max(this.device.solarVoltage)
          this.maxh=this.max(this.device.humidity)
          this.innerWidth = window.innerWidth;
          if(this.innerWidth<1280){
            this.fontSize=5;
          }
          else{
            this.fontSize=10;
          }
          //console.log(this.fontSize)
        })
        
          
        

      })
  }
  max(array){
    var max=array[0]
    for(var i=0;i<array.length;i++){
      if(array[i]>max){
        max=array[i]
      }
    }
    return max
  }
  min(array){
    var min=array[0]
    for(var i=0;i<array.length;i++){
      if(array[i]<min){
        min=array[i]
      }
    }
    return min
  }
  random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }


  onDetails(){
    this.router.navigate(['../'],{relativeTo:this.route})
  }


  public chartTypel: string = 'line';



  public chartLabelsl: Array<any> = ['4 min ago','3 min ago','2 min ago',' 1 min ago',' now'];
  public chartColorsl1: Array<any> = [
    {
      backgroundColor: 'rgba(0,0,0,0)',
      borderColor: 'rgba(233, 30, 99, 0.7)',
      borderWidth: 2,
    },
  ];
  public chartColorsl2: Array<any> = [
    {
      backgroundColor: 'rgba(0,0,0,0)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    }
  ];
  public chartColorsl3: Array<any> = [
    {
      backgroundColor: 'rgba(0,0,0,0)',
      borderColor: 'rgba(0, 150, 136, 0.7)',
      borderWidth: 2,
    }
  ];
  public chartColorsl4: Array<any> = [
    {
      backgroundColor: 'rgba(0,0,0,0)',
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
