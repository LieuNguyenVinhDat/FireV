import { Injectable } from '@angular/core';

import { Auth, GoogleAuthProvider, signInWithPopup, signOut } from '@angular/fire/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth: Auth) { }
  login() {
    // return from(signInWithPopup(this.auth, new GoogleAuthProvider()));
    return from(
      new Promise<string>(async (resolve, reject) => {
        try {
          let credential = await signInWithPopup(
            this.auth,
            new GoogleAuthProvider()
          );
          let idToken = await credential.user.getIdToken();
          resolve(idToken);
        } catch {
          reject('Can not login with Google');
        }
      })
    );
  }

  async logOut(){
    // this.auth.signOut();
    // alert("log out successfull")
    return from(
      new Promise<string>(async (resolve, reject) => {
        try {
        await signOut(this.auth)
        resolve("log out successfull");
        }
        catch {
          reject('Can not login with Google');
        }
      })
    );
  }
}

