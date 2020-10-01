import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DatastorageService } from '../datastorage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pointForm:FormGroup
  constructor(private dataStorageService:DatastorageService) { }
  num:number;
  okay:boolean=true;
  private initForm(){
    let value= this.num? this.num:this.dataStorageService.noPoints
    this.pointForm= new FormGroup({
      value:new FormControl(value),
    })
  }
  onSubmit(){
    this.okay=false;
    this.dataStorageService.updatenoPoints(this.pointForm.value.value)
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
