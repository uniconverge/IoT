import { Component, OnInit, Input } from '@angular/core';
import { DatastorageService } from '../shared/datastorage.service';
import { Label, Color, SingleDataSet } from 'ng2-charts';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ChartType } from 'chart.js';
import { Device } from '../crud/crud.model';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  devices:Device[]
  data1:Array<number>
  data2:Array<number>
  data3:Array<number>
  data4:Array<number>

  constructor(private datastorageservice:DatastorageService,private router:Router,private route:ActivatedRoute
   ) {  }
  ngOnInit(): void {
    this.datastorageservice.fetchDevices().subscribe((devices:Device[])=>{
      this.devices=devices
      this.chartLabels=this.devices.map(item=> {return item.name})
      this.data1=this.devices.map(item=> {return item.temperature})
      this.data2=this.devices.map(item=> {return item.humidity})
      this.data3=this.devices.map(item=> {return item.solarVoltage})
      this.data4=this.devices.map(item=> {return item.batteryVoltage})
      this.chartDatasets1=[{data:this.data1,label:'Temperature'}]
      this.chartDatasets2=[{data:this.data2,label:'Humidity'}]
      this.chartDatasets3=[{data:this.data3,label:'Solar Voltage'}]
      this.chartDatasets4=[{data:this.data4,label:'Battery Voltage'}]

    })
  }
  public doughnutChartLabels:Label[] =['On','Off']

  public doughnutChartData:SingleDataSet =[
      38.4,61.6
  ]

  public doughnutChartType:ChartType='doughnut'
  public chartType: string = 'bar';

  public chartDatasets1: Array<any>
  public chartDatasets2: Array<any> 
  public chartDatasets3: Array<any> 
  public chartDatasets4: Array<any> 

  public chartLabels: Array<any> 

  //public chartLabels: Array<any> = ['Solar cleaner 1','Solar cleaner 2','Solar cleaner 3','Solar cleaner 4','Solar cleaner 5','Solar cleaner 6'];

  public chartColors1: Array<any> = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        "#e1bee7"
       
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        " rgba(156, 39, 176, 0.7) "
      ],
      borderWidth: 2,
    }
  ];
  public chartColors2: Array<any> = [
    {
      backgroundColor: [
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        "#b2dfdb",
        
      ],
      borderColor: [
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255,99,132,1)',
        'rgba(153, 102, 255, 1)',
        "rgba(0, 150, 136, 0.3)"
      ],
      borderWidth: 2,
    }
  ];
  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

}
