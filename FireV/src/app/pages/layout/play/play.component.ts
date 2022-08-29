import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { idToken } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { VideoState } from 'src/app/states/video.state';
import * as VideoActions from 'src/app/actions/video.action';
=======

>>>>>>> 98b5689088397cb4c757f0c351468177aa35c7b4
@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

<<<<<<< HEAD
  playVideo$ = this.store.select((state) => state.video.videoLoad);
  constructor(route: ActivatedRoute, private store: Store<{video: VideoState}>) {
    const id: Observable<string> = route.queryParams.pipe(map(p => p['id']));
    id.subscribe(id => {
      this.store.dispatch(VideoActions.getVideoById({id : id}));
      // this.store.dispatch(VideoActions.getVideo());
    });
   }

  ngOnInit(): void {

=======
  constructor() { }

  ngOnInit(): void {
>>>>>>> 98b5689088397cb4c757f0c351468177aa35c7b4
  }

}
