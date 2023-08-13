import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  SERVER_URL = environment.SERVER_URL;
  constructor(private http: HttpClient) {}
  details: any = '';
  ngOnInit(): void {
    this.details = this.http
      .get(`${this.SERVER_URL}details/get`)
      .subscribe((response) => {
        console.log(response);
      });
    console.log(this.details);
  }
}
