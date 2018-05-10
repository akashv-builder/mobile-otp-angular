import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../app/search.service';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { GetOtpComponent } from './get-otp/get-otp.component';


@NgModule({
  declarations: [
    AppComponent,
    GetOtpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
