import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert-item',
  templateUrl: './alert-item.component.html',
  styleUrls: ['./alert-item.component.scss']
})
export class AlertItemComponent implements OnInit {
  @Input() obj
  @Input() fsize:number
  constructor() { }

  ngOnInit(): void {
  }

}
