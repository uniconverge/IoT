import { Component, OnInit } from '@angular/core';
import { DatastorageService } from './datastorage.service';
import { Device } from './crud/crud.model';
import { CrudService } from './crud/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'iot-dashboard';
  okay:boolean
  constructor(private dataStorageService:DatastorageService,private crudService:CrudService){}
  ngOnInit(){
    console.log('inside AC')
    this.dataStorageService.fetchDevices().subscribe(
      (devices:Device[])=>{
        this.okay=true
        this.crudService.onRefresh(devices)
      }
    )
  }
}
