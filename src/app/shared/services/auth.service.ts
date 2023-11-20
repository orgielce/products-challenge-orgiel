import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, delay, Observable, of} from "rxjs";
import {map} from "rxjs/operators";
import {Credentials, CurrentUser} from "../../shared";

@Injectable({
  providedIn: "root"
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<CurrentUser>;
  public currentUser: Observable<CurrentUser>;

  constructor(private http: HttpClient) {
    let currentUser: CurrentUser = {
      access_token: '',
      user: '',
      name: ''
    };
    try {
      currentUser = JSON.parse(localStorage.getItem('currentUser')!);
    } catch (e) {
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }

    this.currentUserSubject = new BehaviorSubject<CurrentUser>(
      JSON.parse(localStorage.getItem('currentUser')!)
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): CurrentUser {
    return this.currentUserSubject.value;
  }

  login(credentials: Credentials): Observable<CurrentUser> {

    const currentUser: CurrentUser = {
      access_token: credentials.key,
      user: credentials.name.trim(),
      name: credentials.name
    };
    delay(2000);
    return of<CurrentUser>(currentUser)
      .pipe(map(() => {
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        this.currentUserSubject.next(currentUser);
        return currentUser;
      }));
  }

  logOut(): Observable<CurrentUser> {
    const currentUser: CurrentUser = {
      access_token: '',
      user: '',
      name: ''
    };
    return of(currentUser)
      .pipe(map(() => {

        const authentication = {
          currentUser: currentUser,
          error: false,
          loggedIn: false
        };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        localStorage.setItem('authentication', JSON.stringify(authentication));

        this.currentUserSubject.next(currentUser);
        return currentUser;
      }));
  }
}
