import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoligmappaAuthWrapperComponent } from './boligmappa-auth-wrapper/boligmappa-auth-wrapper.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: 'boligmappa-redirect', component: BoligmappaAuthWrapperComponent },
  { path: 'boligmappa-connect', component: BoligmappaAuthWrapperComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
