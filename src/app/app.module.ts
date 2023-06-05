import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivityPageComponent } from './activity-page/activity-page.component';
import { ActivitySectionComponent } from './activity-page/components/activity-section/activity-section.component';

@NgModule({
  declarations: [AppComponent, ActivityPageComponent, ActivitySectionComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
