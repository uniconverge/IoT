import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CrudService } from '../crud.service';
import { Device } from '../crud.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() heading:string;

  constructor(private router:Router,private route:ActivatedRoute,private crudService:CrudService) { }

  innerWidth:number
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }
  ngOnInit(): void {
    console.log('inside nav')
    this.innerWidth=window.innerWidth;
  }
  onLogOut(){
    
  }
  onHome(){
    this.router.navigate(['/home'])  
  }
  onChart(){
    this.router.navigate(['/chart']) 
  }
  onRegistry(){
    this.router.navigate(['/registry']) 
  }
  onAlert(){
    this.router.navigate(['/alert']) 
  }
  onAnalyse(){
    this.router.navigate(['/crud']) 
  }
  onParamAnalyse(){
    this.router.navigate(['/analyse-each']) 
  }
 

}
