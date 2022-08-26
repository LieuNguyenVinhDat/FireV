import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.scss']
})
export class AddVideoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  add(){
    this.router.navigate(['/channel_page']);
  }
  back(){
    this.router.navigate(['/channel_page']);
  }

}
