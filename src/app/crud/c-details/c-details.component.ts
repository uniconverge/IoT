import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CrudService } from '../crud.service';
import { Device } from '../crud.model';
import { DatastorageService } from 'src/app/datastorage.service';
import { ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';


@Component({
  selector: 'app-c-details',
  templateUrl: './c-details.component.html',
  styleUrls: ['./c-details.component.scss']
})
export class CDetailsComponent implements OnInit {
  index:number;
  _id:string
  device:Device;
  constructor(private route:ActivatedRoute,private crudService:CrudService,
    private router:Router,private dataStorageService:DatastorageService) { }
  onEditDevice(){
    this.router.navigate(['edit'],{relativeTo:this.route})
  }
  onDeleteDevice(){
    this.crudService.deleteDevice(this.index)
    this.router.navigate([''],{relativeTo:this.route})
  }

  
  onChart(){
    this.router.navigate(['graph'],{relativeTo:this.route})
  }
  ngOnInit(): void {
    console.log('inside cdC')
    this.route.params.subscribe(
      (params:Params)=>{
          this.index =params['id']
          this.device=this.crudService.getDevice(this.index)
          this.crudService.cValuesChanged.subscribe((devices:Device[])=>{
          this.device=this.crudService.getDevice(this.index)
          // this.dataStorageService.fetchDevice(this.device._id).subscribe((device:Device)=>{
          //   this.device=device
          //   console.log(this.device)
          // })
        })
       }
    );
   }







}
