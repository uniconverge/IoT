import { Component, OnInit, Input } from '@angular/core';
import { Device } from '../../crud.model';

@Component({
  selector: 'app-c-items',
  templateUrl: './c-items.component.html',
  styleUrls: ['./c-items.component.scss']
})
export class CItemsComponent implements OnInit {
  @Input() device:Device;
  @Input() index:number;
  constructor() {
   
   }

  ngOnInit(): void {
    console.log('inside cliC')
  }

}
