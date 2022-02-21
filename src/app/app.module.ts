import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UcWidgetModule } from 'ngx-uploadcare-widget';

import { AppComponent } from './app.component';
import { ListComponent } from './component/list/list.component';
import { CardComponent } from './component/card/card.component';
import { HeaderComponent } from './component/header/header.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CardComponent,
    HeaderComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    UcWidgetModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
