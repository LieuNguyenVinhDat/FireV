<<<<<<< HEAD
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { VideoState } from 'src/app/states/video.state';
import { Video } from 'src/app/models/video.model';
import * as VideoActions from 'src/app/actions/video.action';
import { Router } from '@angular/router';
=======
import { Component, OnInit } from '@angular/core';

>>>>>>> 98b5689088397cb4c757f0c351468177aa35c7b4
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
<<<<<<< HEAD
  Video$ = this.store.select((state) => state.video.videoList);
  constructor(private store: Store<{video: VideoState}>, private router: Router) { }

  ngOnInit(): void {
    this.store.dispatch(VideoActions.getVideo());
  }

  handleError(e: any) {
    console.log(e);
    e.target.src = "../../../../../../../assets/images/user.png";
  }

  playVideo(id: string){
    // this.router.navigateByUrl(`/play?id=${id}`);
    window.location.href = `/play?id=${id}`;
  }

  test(){
    console.log('binh');
=======

  constructor() { }

  ngOnInit(): void {
>>>>>>> 98b5689088397cb4c757f0c351468177aa35c7b4
  }

}
