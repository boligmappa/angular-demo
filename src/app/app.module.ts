import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import '@boligmappa/web-components';
// import '@mbsmebye/web-component-search';
// import '@mbsmebye/web-component-auth';
// import '@boligmappa/web-component-connect';
import { BoligmappaAuthWrapperComponent } from './boligmappa-auth-wrapper/boligmappa-auth-wrapper.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    BoligmappaAuthWrapperComponent,
    DashboardComponent,
    SettingsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
