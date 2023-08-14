import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DetailService } from 'src/app/services/detail.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  SERVER_URL = environment.SERVER_URL;
  constructor(private http: HttpClient, private detailService: DetailService) {}
  details: any = '';
  ngOnInit(): void {
    this.detailService.getDetails().subscribe((resp) => {
      console.log(resp);
      this.details = resp.details.reverse();
    });
  }
  del(index: any) {
    this.detailService.deleteDetail(index).subscribe((resp) => {
      console.log(resp);
      this.details = resp.details.reverse();
    });
    console.log(index);
  }
}
