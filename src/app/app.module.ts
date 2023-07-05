import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsPageComponent } from './modules/contacts-page/contacts-page.component';
import { ContactsSectionComponent } from './modules/contacts-page/components/contacts-section/contacts-section.component';

@NgModule({
  declarations: [AppComponent, ContactsPageComponent,ContactsSectionComponent ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
