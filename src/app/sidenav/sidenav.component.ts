import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log('inside sC')
  }
  onHome(){
    this.router.navigate(['/crud'])
  }
  onDashboard(){
    this.router.navigate(['/chart'])
  }
}
