import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './components/home/app.component';
import { PeopleService } from './services/people.service';
import { PositionsService } from './services/positions.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PeopleService, PositionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
