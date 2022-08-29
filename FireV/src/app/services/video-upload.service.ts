import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VideoUploadService {
  constructor(private http: HttpClient) {}
  addVideo(file: any,idToken:string) {
    return this.http.post(`http://127.0.0.1:3000/upload/add`, file,{ headers: new HttpHeaders({ 'Authorization': `${idToken}` }) });
  }
}
