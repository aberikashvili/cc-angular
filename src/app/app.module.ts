import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YourReliablePartnersSectionComponent } from './modules/your-reliable-partners-section/your-reliable-partners-section.component';

@NgModule({
  declarations: [AppComponent, YourReliablePartnersSectionComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
