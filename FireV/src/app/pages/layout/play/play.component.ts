import { Component, OnInit } from '@angular/core';

import { idToken } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { VideoState } from 'src/app/states/video.state';
import * as VideoActions from 'src/app/actions/video.action';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {


  playVideo$ = this.store.select((state) => state.video.videoLoad);
  getAllExceptId$ = this.store.select((state) => state.video.videoList);
  constructor(route: ActivatedRoute, private store: Store<{video: VideoState}>) {
    const id: Observable<string> = route.queryParams.pipe(map(p => p['id']));
    id.subscribe(id => {
      this.store.dispatch(VideoActions.getVideoById({id : id}));
      this.store.dispatch(VideoActions.getAllExceptId({id : id}));
      // this.store.dispatch(VideoActions.getVideo());
      const video: Observable<any> = route.queryParams.pipe(map(p => p['video']));
      video.subscribe(video => {
        this.store.dispatch(VideoActions.updateViews({id:id, video: video}))
      });

    });

   }


  ngOnInit(): void {

  }

  playVideo(id: string){
    // this.router.navigateByUrl(`/play?id=${id}`);
    window.location.href = `/play?id=${id}`;
  }


}
