import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  SERVER_URL = environment.SERVER_URL;
  constructor(private http: HttpClient) {}
  signUp(user: any): Observable<any> {
    let url = `${this.SERVER_URL}/auth/reg`;
    return this.http.post<any>(url, user);
  }
  signIn(user: any): Observable<any> {
    let url = `${this.SERVER_URL}/auth/login`;
    return this.http.post<any>(url, user);
  }
  setUser(user: any) {
    sessionStorage.setItem('user', user._id);
  }
  getUser() {
    let user: any = sessionStorage.getItem('user');
    return JSON.parse(user);
  }
}
