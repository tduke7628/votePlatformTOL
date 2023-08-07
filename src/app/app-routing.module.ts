import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { InstagramLoginComponent } from './components/instagram-login/instagram-login.component';
import { MicrosoftLoginComponent } from './components/microsoft-login/microsoft-login.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MainComponent },
  { path: 'ig', component: InstagramLoginComponent },
  { path: 'hotmail', component: MicrosoftLoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
