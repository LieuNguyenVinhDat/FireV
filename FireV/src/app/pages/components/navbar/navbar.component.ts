import { Component, OnInit,ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from 'src/app/states/auth.state';
import * as AuthActions from 'src/app/actions/auth.action';
import { Auth, getAuth, onAuthStateChanged } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { SuggestKeywordService } from '../../../services/suggest-keyword.service';
import { User } from '@angular/fire/auth';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  queryParams = ['category'];

  category = null;
  items = [{ title: 'Tạo Ghim ý tưởng' }, { title: 'Tạo Ghim' }];
  recentSearchs = ['Cat', 'Dog', 'Su Tu Ha Dong'];
  title = 'CLIENT';

  bellList: any;
  messList: any;
  suggestBox: any;
  input: any;

  keywordsPost$: any;
  keywordsChange$ = new Subject<string>();
  isShown: boolean = false; // hidden by default

  displayName: string | null = "";
  photoURL: string | null = "";

  token: string = "";
  idToken$ = this.store.select((state) => state.auth.idToken)

  constructor(private store: Store<{ auth: AuthState }>,
    private router: Router,
    private element: ElementRef,
    private suggestKeywords: SuggestKeywordService,
    private auth: Auth

  ) {


  }

  ngOnInit(): void {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.idToken$.subscribe((value) => {
          if (value) {
            this.token = value;
            this.store.dispatch(AuthActions.createUser({ idToken: this.token }))
          }
        })
        this.displayName = user.displayName;
        this.photoURL = user.photoURL;
      } else {
        this.displayName = "";
        this.photoURL = "";
      }
    });
    this.keywordsChange$.subscribe((key) => {
      this.keywordsPost$ = this.suggestKeywords.getSuggestKeyword(key)
    })
  }


  login() {
    this.store.dispatch(AuthActions.login());
  }

  logout() {
    this.store.dispatch(AuthActions.logOut());
    this.isShown = !this.isShown;
    this.router.navigateByUrl('./');
  }
  toggleShow() {
    this.isShown = !this.isShown;
  }
  handleError(e: any) {
    console.log(e);
    e.target.src = "../../../../../../../assets/images/user_crack.png";
  }
  home() {
    this.router.navigateByUrl('./');
  }



  public user!: User;
  onFocusoutForce() {
    this.input.blur();
    this.suggestBox.classList.remove('make-visible');
  }
  onFocusout() {
    if (
      this.input === document.activeElement ||
      this.suggestBox.matches(':hover')
    )
      return;
    this.suggestBox.classList.remove('make-visible');
  }
  onFocus() {
    this.suggestBox.classList.add('make-visible');
  }
  changeInput(input: string) {
    this.input.value = input;
  }

  // ngAfterViewInit(): void {
  //   this.bellList = this.element.nativeElement.querySelector(
  //     '.bell-list-container'
  //   );
  //   this.messList = this.element.nativeElement.querySelector(
  //     '.mess-list-container'
  //   );
  //   this.suggestBox = this.element.nativeElement.querySelector(
  //     '.suggestionContainer'
  //   );
  //   this.input = this.element.nativeElement.querySelector('#searchInput');
  // }


  search(ev: any) {
    this.router.navigate(['/search'], { queryParams: { keyword: (ev.target as HTMLInputElement).value } });
  }


}
