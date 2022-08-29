<<<<<<< HEAD
import { getVideoById } from './../actions/video.action';
=======
>>>>>>> 98b5689088397cb4c757f0c351468177aa35c7b4
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from '../models/video.model';

@Injectable({
  providedIn: 'root'
})
export class AddVideoService {

  constructor(private http: HttpClient) { }
  createVideo(video: any,idToken: string){
    console.log(video)
    return this.http.post<Video>("http://127.0.0.1:3000/video/send", video,{ headers: new HttpHeaders({ 'Authorization': `${idToken}` }) });
  }
<<<<<<< HEAD
  getVideo(): Observable<Video[]>{
    return this.http.get<Video[]>(`http://127.0.0.1:3000/video/all`);
  }
  getVideoByIdDb(id: string): Observable<Video>{
    return this.http.get<Video>(`http://127.0.0.1:3000/video/play?id=`+id);
  }
=======
  // getVideo(): Observable<Video[]>{
  //   return this.http.get<Video[]>(`http://127.0.0.1:5000/video/`);
  // }
  // getVideoById(id: string): Observable<Video[]>{
  //   return this.http.get<Video[]>(`http://127.0.0.1:5000/video/?id=${id}`+id);
  // }
>>>>>>> 98b5689088397cb4c757f0c351468177aa35c7b4
  // updateVideo(video: Video): Observable<Video[]>{
  //   return this.http.put<Video[]>(`http://127.0.0.1:5000/video/`, video);
  // }
  // deleteVideo(id: string): Observable<Video[]>{
  //   return this.http.delete<Video[]>(`http://127.0.0.1:5000/video/?id=${id}`+id);
  // }
}
