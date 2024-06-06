import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DvdComponent } from './dvd/dvd.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DvdService } from './service/dvd.service';

@NgModule({
  declarations: [
    AppComponent,
    DvdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [DvdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
