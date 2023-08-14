import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { InstagramLoginComponent } from './components/instagram-login/instagram-login.component';
import { MicrosoftLoginComponent } from './components/microsoft-login/microsoft-login.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminComponent } from './components/admin/admin.component';
import { VoteDoneComponent } from './components/vote-done/vote-done.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardGuard } from './dashboard.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MainComponent },
  { path: 'ig', component: InstagramLoginComponent },
  { path: 'hotmail', component: MicrosoftLoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dash',
    component: DashboardComponent,
    canActivate: [DashboardGuard],
  },
  { path: 'edit', component: AdminComponent },
  { path: 'status', component: VoteDoneComponent },
  { path: 'signup', component: SignUpComponent },
  { path: '**', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
