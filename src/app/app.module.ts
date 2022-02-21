import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UcWidgetModule } from 'ngx-uploadcare-widget';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';
import { ErrorMessageComponent } from './error-message/error-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    CardComponent,
    ErrorMessageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UcWidgetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
