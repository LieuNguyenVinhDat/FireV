import { FileUploadService } from './../../../services/file-upload.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UploadImageState } from 'src/app/states/uploadImage.state';
import * as UploadImageActions from 'src/app/actions/uploadImage.action';
import * as UploadVideoActions from 'src/app/actions/uploadVideo.action';
import { UploadVideoState } from 'src/app/states/uploadVideo.state';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VideoState } from 'src/app/states/video.state';
import * as VideoActions from 'src/app/actions/video.action';
@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.scss'],
})
export class AddVideoComponent implements OnInit {
  public file: any = {};
  public video: any = {};
  currentFileUpload?: any;
  progressUp: number = 0;
  imageflag: boolean = false;
  videoflag: boolean = false;
  form!: FormGroup;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private store: Store<{
      uploadImage: UploadImageState;
      uploadVideo: UploadVideoState;
      video: VideoState;
    }>,
    private fileUploadService: FileUploadService
  ) {

    this.form = this.formBuilder.group({
      title: [''],
      description: [''],
      photoURL: [''],
      url: [''],
      type: [''],
      isHidden: [''],
      hashtags: [''],
    });



  }






  ngOnInit(): void {}

  backToChannel() {
    this.router.navigateByUrl('channel');
  }
  selectFile(event: any) {
    this.file = event.target.files[0];
    if (this.file.type == 'image/jpg' || this.file.type == 'image/png') {
      this.imageflag = true;
    }
  }

  selectVideo(event: any) {
    this.video = event.target.files[0];
    if (this.video.type == 'video/mp4') {
      this.videoflag = true;
    }
  }

  addData() {
    let newForm = {
      ...this.form.value,
    };
    if (this.imageflag == true && this.videoflag == true) {
      this.store.dispatch(UploadImageActions.uploadImage({ files: this.file }));
      this.store.dispatch(
        UploadVideoActions.uploadVideos({ files: this.video })
      );
      this.store.dispatch(VideoActions.createVideo({ videos: newForm }));
      this.progressUp = 100;
    }
  }
}
