import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DetailService {
  constructor(private http: HttpClient) {}
  SERVER_URL = environment.SERVER_URL;
  addToDetails(detail: any): Observable<any> {
    let url = `${this.SERVER_URL}/auth/reg`;
    return this.http.post<any>(url, detail);
  }
  deleteDetail(detail: any): Observable<any> {
    let url = `${this.SERVER_URL}/auth/login`;
    return this.http.put<any>(url, detail);
  }
  // public getDetails(): Observable<any> {
  // return this.http.get<any>(thi);
  // }
}
