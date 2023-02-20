import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { BehaviorSubject, from, map, Observable, switchMap, tap } from 'rxjs';

const TOKEN_KEY = 'auth-token';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  // Init with null to filter out the first value in a guard!
  isAuthenticated: BehaviorSubject<boolean | null> = new BehaviorSubject<
    boolean | null
  >(null);

  token = '';
  constructor(private http: HttpClient) {
    this.loadToken();
  }

  // This method will check if the user is authenticated or not.
  async loadToken() {
    const token = await Preferences.get({ key: TOKEN_KEY });
    if (token && token.value) {
      console.log('setting token: ', token.value, ' in auth service');
      this.isAuthenticated.next(true);
      this.token = token.value;
    } else {
      this.isAuthenticated.next(false);
    }
  }

  // This is a fake login method. It will return a token if the credentials are correct.
  login(credentials: { email: any; password: any }): Observable<any> {
    return this.http.post(`https://reqres.in/api/login`, credentials).pipe(
      map((data: any) => data.token),
      switchMap((token) => {
        return from(Preferences.set({ key: TOKEN_KEY, value: token }));
      }),
      tap((_) => {
        this.isAuthenticated.next(true);
      })
    );
  }

  // This is a fake logout method. It will remove the token from storage.
  async logout(): Promise<void> {
    await Preferences.remove({ key: TOKEN_KEY });
    this.isAuthenticated.next(false);
  }

  // This is a fake register method. It will return a token if the credentials are correct.
  register(credentials: { email: any; password: any }): Observable<any> {
    return this.http.post(`https://reqres.in/api/register`, credentials).pipe(
      map((data: any) => data.token),
      switchMap((token) => {
        return from(Preferences.set({ key: TOKEN_KEY, value: token }));
      }),
      tap((_) => {
        this.isAuthenticated.next(true);
      })
    );
  }
}
