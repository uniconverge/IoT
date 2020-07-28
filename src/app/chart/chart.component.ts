import { Component, OnInit, Input } from '@angular/core';
import { DatastorageService } from '../datastorage.service';
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
  constructor(private datastorageservice:DatastorageService,private router:Router,private route:ActivatedRoute
   ) {  }

  ngOnInit(): void {
    }
}
