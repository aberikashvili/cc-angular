import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsPageComponent } from './modules/contacts-page/contacts-page.component';
import { ContactsSectionComponent } from './modules/contacts-page/components/contacts-section/contacts-section.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "./shared/shared.module";

@NgModule({
    declarations: [AppComponent, ContactsPageComponent, ContactsSectionComponent],
    providers: [],
    bootstrap: [AppComponent],
    imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, ReactiveFormsModule, SharedModule]
})
export class AppModule {}
