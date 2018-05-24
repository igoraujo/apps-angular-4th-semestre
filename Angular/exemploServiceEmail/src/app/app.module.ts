import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MailServiceService } from './mail-service.service';
import { MailComponent } from './mail/mail.component';

@NgModule({
  declarations: [
    AppComponent,
    MailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    MailServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
