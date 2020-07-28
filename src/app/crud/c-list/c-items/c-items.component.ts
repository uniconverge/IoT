import { Component, OnInit, Input } from '@angular/core';
import { Device } from '../../crud.model';
import { Router, ActivatedRoute } from '@angular/router';
import { BLACK_ON_WHITE_CSS_CLASS } from '@angular/cdk/a11y/high-contrast-mode/high-contrast-mode-detector';

@Component({
  selector: 'app-c-items',
  templateUrl: './c-items.component.html',
  styleUrls: ['./c-items.component.scss']
})
export class CItemsComponent implements OnInit {
  @Input() device:Device;
  @Input() index:number;
  colr='black';
  prop;
  constructor(private router:Router,private route:ActivatedRoute) {
   
   }
   onClick(){
    // this.colr='#fb8c00'
     this.router.navigate([this.index+'/graph'],{relativeTo:this.route});
    // this.colr='black'
   }
  ngOnInit(): void {
    this.prop=this.index+'/graph'
    console.log('inside cliC')
  }

}
