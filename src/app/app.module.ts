import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectDetailsComponent } from './modules/project-details/project-details.component';
import { OtherProjectsComponent } from './modules/project-details/components/other-projects/other-projects.component';

@NgModule({
  declarations: [AppComponent, ProjectDetailsComponent, OtherProjectsComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
