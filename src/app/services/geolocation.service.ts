import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeolocationService {
  constructor(public http: HttpClient) {}
  url: string = 'https://ipinfo.io/json?token=6f08819d1d46ee';
  public getLocationDetails(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
