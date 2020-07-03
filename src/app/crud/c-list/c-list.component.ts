import { Component, OnInit } from '@angular/core';
import { Device } from '../crud.model';
import { CrudService } from '../crud.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-c-list',
  templateUrl: './c-list.component.html',
  styleUrls: ['./c-list.component.scss']
})
export class CListComponent implements OnInit {
  devices:Device[]=[];
  constructor(private crudService:CrudService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log('inside clC')
    this.crudService.cValuesChanged.subscribe(
      (devices:Device[])=>{
        this.devices=devices;
      }
    );
    this.devices=this.crudService.getDevices();
  }

  onAddDevice(){
    this.router.navigate(['add'],{relativeTo:this.route})
  }

}
