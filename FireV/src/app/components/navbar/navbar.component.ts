import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from 'src/app/states/auth.state';
import * as AuthActions from 'src/app/actions/auth.action';
import { getAuth, onAuthStateChanged, signOut } from '@angular/fire/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  displayName : string | null = "";
  photoURL : string | null = "";
  constructor(private store: Store <{ auth: AuthState }>,
    ) {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.displayName = user.displayName;
        this.photoURL = user.photoURL;
        const uid = user.uid;

        // ...
      } else {
        this.displayName = "";
        this.photoURL = "";
      }

    });

  }


  ngOnInit(): void {}
  login() {
    this.store.dispatch(AuthActions.login());
  }

  logout() {
    this.store.dispatch(AuthActions.logOut());

  }

}
