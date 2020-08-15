import { Component, OnInit, HostListener } from '@angular/core';
import { CrudService } from '../crud.service';
import { AlertService } from '../alert.service';
import { Device } from '../crud.model';

@Component({
  selector: 'app-alert-disp',
  templateUrl: './alert-disp.component.html',
  styleUrls: ['./alert-disp.component.scss']
})
export class AlertDispComponent implements OnInit {
  okay:boolean=false
  devices:Device[]
  alertArray:Array<any>
  innerWidth:number
  @HostListener('window:resize', ['$event'])
  fsize:number
  onResize(event) {
    this.innerWidth = window.innerWidth;

  }
  constructor(private crudServce:CrudService,private alertService:AlertService) { }

  ngOnInit(): void {
    this.crudServce.cValuesChanged.subscribe((devices:Device[])=>{
      this.okay=true;
      this.devices=devices;
       this.alertArray=this.alertService.findAlerts(devices)
    }
  )
  this.innerWidth = window.innerWidth;

  }

}
