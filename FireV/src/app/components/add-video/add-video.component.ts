import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UploadImageState } from 'src/app/states/uploadImage.state';
import * as UploadImageActions from 'src/app/actions/uploadImage.action';
import * as UploadVideoActions from 'src/app/actions/uploadVideo.action';
import { UploadVideoState } from 'src/app/states/uploadVideo.state';
@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.scss']
})
export class AddVideoComponent implements OnInit {
  public file: any = {};
  public video: any = {};
  constructor(private router: Router, private store: Store<{ uploadImage: UploadImageState, uploadVideo: UploadVideoState  }>) { }

  ngOnInit(): void {
  }
  add(){
    this.router.navigate(['/channel_page']);
  }
  back(){
    this.router.navigate(['/channel_page']);
  }
  selectFile(event: any){
    this.file = event.target.files[0];
  }

  selectVideo(event: any){
    this.video = event.target.files[0];
  }

  addData(){

    this.store.dispatch(UploadImageActions.uploadImage({files: this.file}));
    this.store.dispatch(UploadVideoActions.uploadVideos({files: this.video}));
  }
}
