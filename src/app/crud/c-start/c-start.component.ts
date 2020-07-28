import { Component, OnInit, HostListener } from '@angular/core';
import { CrudService } from '../crud.service';
import { Device } from '../crud.model';
import { Label, SingleDataSet, monkeyPatchChartJsTooltip, monkeyPatchChartJsLegend, Color } from 'ng2-charts';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-c-start',
  templateUrl: './c-start.component.html',
  styleUrls: ['./c-start.component.scss']
})
export class CStartComponent implements OnInit {
  devices:Device[]
  okay:boolean
  data0:Array<string>
  data1:Array<any>
  data2:Array<any>
  data3:Array<any>
  data4:Array<any>
  chartDatasets0
  public lineChartData1: ChartDataSets[];
  public lineChartData2: ChartDataSets[];
  public lineChartData3: ChartDataSets[];
  public lineChartData4: ChartDataSets[];
  public pieChartData1: SingleDataSet;
  public pieChartData2: SingleDataSet=[50,50];
  public pieChartData3: SingleDataSet=[75,25];
  public chartLabels1
  datanames

  constructor(private crudService:CrudService,) {
    
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }
  innerWidth:number
  height:number
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    if(this.innerWidth<1280){
      this.height=80;
    }
    else{
      this.height=27;
    }
  }
  ngOnInit(): void {
    this.crudService.cValuesChanged.subscribe((devices:Device[])=>{
      this.devices=devices
      //console.log(devices)
      this.chartDatasets0=this.devices.map(item=> {return item.status})
      this.chartDatasets0=this.chartDatasets0.map(item=> {return item[0]})
      console.log(this.chartDatasets0)
      var counf=0
      var counn=0
      for(var i=0;i<5;i++){
       // if(this.chartDatasets0[i]!=[])
          if(this.chartDatasets0[i]==='on')
            counn++;
            else counf++
        
      }
      console.log(counn,counf)
      this.okay=true
      this.pieChartData1=[counn,counf]
      this.datanames=this.devices.map(item=>item.name)
      //this.data0=this.devices.map(item=> {return item.status})
      this.data1=this.devices.map(item=> {return item.temperature})
      this.data2=this.devices.map(item=> {return item.humidity})
      this.data4=this.devices.map(item=> {return item.solarVoltage})
      this.data3=this.devices.map(item=> {return item.batteryVoltage})
      var i=0
      this.lineChartData1= this.data1.map((item)=>{return {data:item.reverse(),label:this.datanames[i++]}})
      var i=0
     
      this.lineChartData2= this.data2.map((item)=>{return {data:item.reverse(),label:this.datanames[i++]}})
      var i=0
      this.lineChartData3= this.data3.map((item)=>{return {data:item.reverse(),label:this.datanames[i++]}})
      var i=0
      this.lineChartData4= this.data4.map((item)=>{return {data:item.reverse(),label:this.datanames[i++]}})
      this.innerWidth = window.innerWidth;
      if(this.innerWidth<1280){
        this.height=80;
      }
      else{
        this.height=27;
      }
      console.log(this.height)
    })
  }
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels1: Label[] = ['On','Off'];
  public pieChartLabels2: Label[] = ['something','something'];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
// ---------------------------------------------------------------------------------------------
public lineChartData: ChartDataSets[];
public lineChartLabels: Label[]=['4min ago','3mins ago',"2mins ago","1min ago","now"];

public lineChartColors1: Color[] = [
  {
    borderColor: 'rgba(255, 235, 59, 0.7)',
    backgroundColor: 'transparent',
  },{
    borderColor: 'rgba(0, 188, 212, 0.7) ',
    backgroundColor: 'transparent',
  },{
    borderColor: 'rgba(244, 67, 54, 0.7)',
    backgroundColor: 'transparent',
  }
];
public lineChartColors2: Color[] = [
  {
    borderColor: 'rgba(156, 39, 176, 0.7) ',
    backgroundColor: 'transparent',
  },{
    borderColor: 'rgba(3, 169, 244, 0.7) ',
    backgroundColor: 'transparent',
  },{
    borderColor: 'rgba(0, 150, 136, 0.7)',
    backgroundColor: 'transparent',
  }
];

public lineChartLegend = true;
public lineChartType = 'line';
public lineChartPlugins = [];

}
