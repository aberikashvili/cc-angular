import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsPageComponent } from './modules/projects-page/projects-page.component';
import { OurProjectsComponent } from './modules/projects-page/components/our-projects/our-projects.component';

@NgModule({
  declarations: [AppComponent, ProjectsPageComponent, OurProjectsComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
