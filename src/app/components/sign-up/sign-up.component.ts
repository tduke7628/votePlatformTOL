import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  email: String = '';
  password: String = '';
  user: any = '';
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
  submit() {
    this.user = { email: this.email, password: this.password };
    this.authService.signUp(this.user).subscribe((resp) => {
      console.log(resp);
      this.authService.setUser(resp);
      alert('Sign up successful,proceed to login');
    });
  }
}
