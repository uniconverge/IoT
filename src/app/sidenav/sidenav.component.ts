import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) { }
  innerWidth:number
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
   
  }
  ngOnInit(): void {
    console.log('inside sC')
    this.innerWidth=window.innerWidth;
    
  }
  
}
