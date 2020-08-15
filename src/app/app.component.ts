import { Component, OnInit } from '@angular/core';
import { DatastorageService } from './datastorage.service';
import { Device } from './crud.model';
import { CrudService } from './crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'iot-dashboard';
  okay:boolean
  //ok:boolean=true
  constructor(private dataStorageService:DatastorageService,private crudService:CrudService){}
  ngOnInit(){
    console.log('inside AC')
   setInterval(()=>{
    this.dataStorageService.fetchDevices().subscribe(
      (devices:Device[])=>{
        this.okay=true
        // this.ok =this.crudService.ok
        //console.log(this.ok)
        this.crudService.onRefresh(devices)
      }
    )
   },1000)
  }
}
