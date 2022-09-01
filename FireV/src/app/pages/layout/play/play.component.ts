import { Component, OnInit } from '@angular/core';

import { idToken, reload } from '@angular/fire/auth';
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
  videoDuration: any;
  currentTime: number = 0;
  totalTime: number = 0;
  tam1: number = 0;
  tam2: number = 0;
  playVideo$ = this.store.select((state) => state.video.videoLoad);
  getAllExceptId$ = this.store.select((state) => state.video.videoList);
  constructor(public route: ActivatedRoute, private store: Store<{video: VideoState}>) {
    //const currentTime: Observable<number> = 0;
    //const totalTime: Observable<number> = 0;
    const id: Observable<string> = route.queryParams.pipe(map(p => p['id']));
    id.subscribe(id => {
      this.store.dispatch(VideoActions.getVideoById({id : id}));
      this.store.dispatch(VideoActions.getAllExceptId({id : id}));
      // this.store.dispatch(VideoActions.getVideo());
      const video: Observable<any> = route.queryParams.pipe(map(p => p['video']));
      video.subscribe(video => {
        // this.store.dispatch(VideoActions.updateViews({id:id, video: video}));
        // if(this.totalTime > 0){
        //   if(this.totalTime > 120){

        //   }
        //   if(this.totalTime < 120){

        //   }
        // }
        // if(this.totalTime == 0){

        // }

      });

    });


   }


  ngOnInit(): void {

  }

  playVideo(id: string){
    // this.router.navigateByUrl(`/play?id=${id}`);
    window.location.href = `/play?id=${id}`;
  }



  setCurrentTime(event: any) {
    this.currentTime = event.target.currentTime;
    this.totalTime = event.target.duration;
    //  console.log(this.currentTime);
    const id: Observable<string> = this.route.queryParams.pipe(map(p => p['id']));
    id.subscribe(id => {
    const video: Observable<any> = this.route.queryParams.pipe(map(p => p['video']));
    video.subscribe(video => {
      if(this.currentTime > 0){
        if(this.currentTime > 120){

          this.store.dispatch(VideoActions.updateViews({id:id, video: video}));
        }
        if(this.currentTime < 120){
          console.log("views không được tăng");
        }
        if(this.currentTime >= this.totalTime){
          this.store.dispatch(VideoActions.updateViews({id:id, video: video}));
          console.log("views được tăng");
        }
      }
      else if (this.currentTime < 0){
        console.log("views không được tăng")
      }
    //   this.store.dispatch(VideoActions.updateViews({id:id, video: video}));
    // console.log(this.totalTime);

    });
  });

  }

}
