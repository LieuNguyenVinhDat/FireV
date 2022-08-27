import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Video } from 'src/app/models/video.model';
@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(
    private Http: HttpClient
  ) { }

  updateNote(video:Video):Observable<Video[]>{
    return this.Http.put<Video[]>(`http://localhost:3000/note/`,video);
  }
}
