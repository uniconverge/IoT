import { Component, OnInit, Input } from '@angular/core';
import { Device } from 'src/app/crud.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/crud.service';

@Component({
  selector: 'app-reg-item',
  templateUrl: './reg-item.component.html',
  styleUrls: ['./reg-item.component.scss']
})
export class RegItemComponent implements OnInit {
  @Input() device:Device;
  @Input() index:number;
  prop:string
  constructor(private router:Router,private route:ActivatedRoute,private crudService:CrudService) { }

  ngOnInit(): void {
    this.prop=this.index+'/edit'
  }
  onView(){
    this.router.navigate([this.index],{relativeTo:this.route})
  }
  onEdit(){
    this.router.navigate([this.prop],{relativeTo:this.route})
  }
  onDelete(){
    this.crudService.deleteDevice(this.index)
  }
}
