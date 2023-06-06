import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TanamshromlebiPageComponent } from './modules/tanamshromlebi-page/tanamshromlebi-page.component';
import { TanamshromlebiOurTeamComponent } from './modules/tanamshromlebi-page/components/tanamshromlebi-our-team/tanamshromlebi-our-team.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
