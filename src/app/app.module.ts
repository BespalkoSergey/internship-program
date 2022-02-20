import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UcWidgetModule } from 'ngx-uploadcare-widget';

import { AppComponent } from './app.component';
import { ListComponent } from './component/list/list.component';
import { CardComponent } from './component/card/card.component';
import { HeaderComponent } from './component/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CardComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    UcWidgetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
