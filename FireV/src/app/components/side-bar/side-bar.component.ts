import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor(private router: Routerprivate router: Router) { }

  ngOnInit(): void {
  }
  channel_page(){
    this.router.navigate(['/channel_page']);
  }
  ThinhHanh(){
    this.router.navigate(['/popular']);
  }
  Home(){
    this.router.navigate(['/']);
  }
  Subscribe(){
    this.router.navigate(['/channel_page/view_profile']);
  }
  addVideoChange(){
    this.router.navigate(['my']);
  }
}
