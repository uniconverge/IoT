import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DatastorageService } from '../datastorage.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  pointForm:FormGroup
  constructor(private dataStorageService:DatastorageService) { }
  num:number;
  okay:boolean=true;
  private initForm(){
    let value= this.num? this.num:this.dataStorageService.noPoints
    let timer=  this.dataStorageService.timer;
    this.pointForm= new FormGroup({
      value:new FormControl(value),
      timer:new FormControl(timer),
    })
  }
  onSubmit(){
    this.okay=false;
    this.dataStorageService.updatenoPoints(this.pointForm.value.value)
    this.dataStorageService.updateTimer(this.pointForm.value.timer);
    setTimeout(()=>{
      this.okay=true;
    },2000)
  }
  ngOnInit(): void {
    this.dataStorageService.pointsChanged.subscribe((num:number)=>{
      this.num=num;
    })
    this.initForm();
    // this.dataStorageService.updatenoPoints(5);
  }

}
