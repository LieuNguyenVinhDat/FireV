import { FileUploadService } from './../../../services/file-upload.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UploadImageState } from 'src/app/states/uploadImage.state';
import * as UploadImageActions from 'src/app/actions/uploadImage.action';
import * as UploadVideoActions from 'src/app/actions/uploadVideo.action';
import { UploadVideoState } from 'src/app/states/uploadVideo.state';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VideoState } from 'src/app/states/video.state';
import * as VideoActions from 'src/app/actions/video.action';
import { AuthState } from 'src/app/states/auth.state';
import { Video } from 'src/app/models/video.model';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.scss'],
})
export class AddVideoComponent implements OnInit {

  isUploading: boolean = false;

  public file: any = {};
  public video: any = {};

  videoUrl$ = this.store.select((state) => state.uploadVideo.filepath);
  imageUrl$ = this.store.select((state) => state.uploadImage.filepath);

  idToken$ = this.store.select((state) => state.auth.idToken);
  token: string = "";

  progressUp: number = 0;
  imageflag: boolean = false;
  videoflag: boolean = false;
  form!: FormGroup;

  constructor(
    private _snackBar: MatSnackBar,
    private router: Router,
    private formBuilder: FormBuilder,
    private store: Store<{
      uploadImage: UploadImageState,
      uploadVideo: UploadVideoState,
      video: VideoState,
      auth: AuthState
    }>,
  ) {
    this.idToken$.subscribe((token) => {
      this.token = token;
      // console.log(this.token);
    })
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required],
      isHidden: ['', Validators.required],
      hashtags: ['', Validators.required],
    });

  }

  backToChannel() {
    this.router.navigateByUrl('channel');
  }

  selectFile(event: any) {
    this.file = event.target.files[0];
    console.log(this.file)
    if (this.file.type.includes('image')) {
      this.imageflag = true;
    } else {
      this.videoflag = false;
      console.log(this.videoflag)
    }
  }

  selectVideo(event: any) {
    this.video = event.target.files[0];
    console.log(this.video)
    if (this.video.type.includes('video')) {
      this.videoflag = true;
    } else {
      this.videoflag = false;
      console.log(this.videoflag)
    }
  }

  resetForm() {
    this.form.reset(this.form);
    this.file = {};
    this.video = {};
  }

  async addData() {
    let hashtags = [];
    this.isUploading = true;
    if (!this.video) {
      alert('file video nhập vào bị trống');
      this.isUploading = false;
      return
    } else {
      if (this.imageflag == true && this.videoflag == true) {
        this.store.dispatch(UploadImageActions.uploadImage({ files: this.file }));
        this.store.dispatch(UploadVideoActions.uploadVideos({ files: this.video, idToken: this.token }));

        let form = this.form.value;
        let description = form.description.replace(/\n/g, "<br>");
        let imagePath = "";
        let videoPath = "";

        if (form.hashtags) {
          // console.log(form.hashtags);
          hashtags = form.hashtags.trim();
          hashtags = hashtags.split(" ");
          console.log(hashtags);
        }
        let newForm = {
          ...form,
          hashtags: hashtags,
          description: description
        };

        this.videoUrl$.subscribe(async (value) => {
          if (value) {
            videoPath = value;
            this.imageUrl$.subscribe((value) => {
              if (value) {
                imagePath = value,
                  newForm = {
                    ...newForm,
                    image_url: imagePath,
                    url: videoPath
                  }
                this.store.dispatch(VideoActions.createVideo({ idToken: this.token, video: newForm }));
                // this.progressUp = 100;
                this.isUploading = false;
                this._snackBar.open("Upload successful!!!", "close", {
                  duration: 3000,
                  horizontalPosition: 'left',
                  verticalPosition: 'bottom',
                });
              }
            })
          }
        })


      } else {
        alert('file nhập vào không đúng kiểu');
        this.isUploading = false;
        return
      }
    }
    this.resetForm();
  }
}
