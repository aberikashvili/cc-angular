import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AwardsDeedsSectionComponent } from './awards-deeds-section/awards-deeds-section.component';
import { ButtonsComponent } from './buttons/buttons/buttons.component';


@NgModule({
  declarations: [
    AppComponent,
    AwardsDeedsSectionComponent
    ButtonsComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
