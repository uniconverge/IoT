import { Component, OnInit, Input,HostListener} from '@angular/core';
import { Device } from '../crud.model';
import { CrudService } from '../crud.service';
import { Label, SingleDataSet, monkeyPatchChartJsTooltip, monkeyPatchChartJsLegend, Color } from 'ng2-charts';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { AlertService } from '../alert-disp/alert.service';
import { DatastorageService } from '../datastorage.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  devices:Device[]
  okay:boolean
  data0:Array<string>
  data1:Array<any>
  data2:Array<any>
  data3:Array<any>
  data4:Array<any>
  alertArray:Array<any>
  alertArraySize:number
  countTempNG:number=0
  countSvNG:number=0
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

  constructor(private crudService:CrudService,private alertService:AlertService,private dataStorageService:DatastorageService) {
    
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }
  innerWidth:number
  height:number
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    if(this.innerWidth<768){
      this.height=80;
    }
    else{
      this.height=27;
    }
  }
  ngOnInit(): void {
    this.alertService.fetchAlerthr();

    
    var num =this.dataStorageService.noPoints
    this.lineChartLabels=[];
    num--;
    while(num){
      this.lineChartLabels.push(num+" ago");
      num--
    }
    this.lineChartLabels.push("now")
    this.dataStorageService.pointsChanged.subscribe((num:number)=>{
      this.lineChartLabels=[];
      num--
      while(num){
        this.lineChartLabels.push(num+" ago");
        num--
      }
      this.lineChartLabels.push("now")
    });
    
    this.crudService.cValuesChanged.subscribe((devices:Device[])=>{
      var color2=['rgba(255, 235, 59, 0.7)','rgba(0, 188, 212, 0.7) ','rgba(244, 67, 54, 0.7)','rgba(156, 39, 176, 0.7) ','rgba(3, 169, 244, 0.7) ','rgba(0, 150, 136, 0.7)','#9933CC','#eeff41','rgba(3, 169, 244, 0.7) ','rgba(156, 39, 176, 0.7)','rgba(0, 150, 136, 0.7) '];
      var color1=['rgba(0, 188, 212, 0.7) ','rgba(255, 235, 59, 0.7)','rgba(156, 39, 176, 0.7) ','rgba(0, 150, 136, 0.7) ','rgba(3, 169, 244, 0.7) ','rgba(0, 150, 136, 0.7)','#9933CC','#eeff41','rgba(3, 169, 244, 0.7) ','rgba(156, 39, 176, 0.7)','rgba(244, 67, 54, 0.7)'];
      for(var i=0;i<devices.length;i++){
        this.lineChartColors3.push(
          {
            borderColor: color1[i],
            backgroundColor: 'transparent',
          }
        );
        this.lineChartColors4.push(
          {
            borderColor: color1[10-i],
            backgroundColor: 'transparent',
          }
        );
        this.lineChartColors5.push(
          {
            borderColor: color2[i],
            backgroundColor: 'transparent',
          }
        );
        this.lineChartColors6.push(
          {
            borderColor: color2[10-i],
            backgroundColor: 'transparent',
          }
        );
        
      }
      this.devices=devices
      this.okay=true
      this.chartDatasets0=this.devices.map(item=> {return item.status})
      this.chartDatasets0=this.chartDatasets0.map(item=> {return item[0]})
      // console.log(this.chartDatasets0)
      var counf=0
      var counn=0
      for(var i=0;i<devices.length;i++){
       // if(this.chartDatasets0[i]!=[])
          if(this.chartDatasets0[i]==='on')
            counn++;
            else counf++  
      }
      // console.log(counn,counf)
      this.pieChartData1=[counf,counn]
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
     
      
      this.alertArray=this.alertService.findAlerts(devices)
      this.alertArraySize=this.alertArray.length;
      this.countSvNG=0;
      this.countTempNG=0;
      for(var i=0;i<this.alertArraySize;i++){
        if(this.alertArray[i].type=="temperature"){this.countTempNG++}
        else if(this.alertArray[i].type=="solarVoltage"){this.countSvNG++}
      }
      // console.log(this.countTempNG,this.countSvNG,this.alertArraySize)
      this.pieChartData2=[this.countTempNG,(this.devices.length-this.countTempNG)]
      this.pieChartData3=[this.countSvNG,(this.devices.length-this.countSvNG)]


    })
    this.innerWidth = window.innerWidth;
    if(this.innerWidth<768){
      this.height=80;
    }
    else{
      this.height=27;
    }
    // console.log(this.height)
  }
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels1: Label[] = ['Off','On',];
  public pieChartLabels2: Label[] = ['Low Temp','Normal Temp'];
  public pieChartLabels3: Label[] = ['Under SV','Normal SV'];
  public colors1= [{  backgroundColor: ['#ff4444','#4285F4', ]}]
  public colors2= [{  backgroundColor: ['#fb8c00','#4285F4', ]}]
  public colors3= [{  backgroundColor: ['#ffeb3b','#4285F4', ]}]
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
// ---------------------------------------------------------------------------------------------
public lineChartData: ChartDataSets[];
public lineChartLabels: Label[]=[];

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

public lineChartColors3: Color[] =[];
public lineChartColors4: Color[] =[];
public lineChartColors5: Color[] =[];
public lineChartColors6: Color[] =[];

public lineChartLegend = true;
public lineChartType = 'line';
public lineChartPlugins = [];

}
