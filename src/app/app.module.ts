import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UcWidgetModule } from 'ngx-uploadcare-widget';

import { AppComponent } from './app.component';
import { ListComponent } from './component/list/list.component';
import { CardComponent } from './component/card/card.component';
import { HeaderComponent } from './component/header/header.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxPaginationModule} from "ngx-pagination";
import {MatIconModule} from "@angular/material/icon";
import { StyleSearchDirective } from './directives/style-search.directive';
import { HighlightSearchPipe } from './pipes/text-color.pipe';
import {MatMenuModule} from "@angular/material/menu";
import { FilterComponent } from './component/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CardComponent,
    HeaderComponent,
    StyleSearchDirective,
    HighlightSearchPipe,
    FilterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UcWidgetModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    MatIconModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
