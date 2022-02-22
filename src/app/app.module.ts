import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UcWidgetModule } from 'ngx-uploadcare-widget';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';
import { ErrorComponent } from './error/error.component';
import { DislikeComponent } from './icon-svg/dislike/dislike.component';
import { FavoriteComponent } from './icon-svg/favorite/favorite.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    CardComponent,
    ErrorComponent,
    DislikeComponent,
    FavoriteComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UcWidgetModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
