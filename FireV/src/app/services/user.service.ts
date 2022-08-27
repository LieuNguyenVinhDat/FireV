import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public createUser(idToken: string) {
    return this.http.post('http://127.0.0.1:3000/user/send', '', { headers: new HttpHeaders({ 'Authorization': `${idToken}` }) });
  }

  public getUserId(idToken:string){
    return this.http.get<string>('http://127.0.0.1:3000/user/id', { headers: new HttpHeaders({ 'Authorization': `${idToken}` }) });
  }
}
