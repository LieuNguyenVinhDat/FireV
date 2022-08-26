import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VideoUploadService {
  constructor(private http: HttpClient) {}
  addVideo(file: any) {
    return this.http.post(`http://127.0.0.1:5000/upload/add`, file);
  }
}
