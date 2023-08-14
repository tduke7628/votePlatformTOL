import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: String = '';
  pass: String = '';
  user: any = '';
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
  login() {
    this.user = { email: this.email, password: this.pass };
    this.authService.signIn(this.user).subscribe((resp) => {
      console.log(resp);
      this.authService.setUser(resp);
      alert('login successful');
      setTimeout(() => {
        this.router.navigate(['/dash']);
      }, 1000);
    });
    sessionStorage.setItem('TOKEN', 'signedIn');
  }
}
