import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { UcWidgetModule } from 'ngx-uploadcare-widget';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';
import { FavoriteIconComponent } from './favorite-icon/favorite-icon.component';
import { DislikeIconComponent } from './dislike-icon/dislike-icon.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    CardComponent,
    FavoriteIconComponent,
    DislikeIconComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    UcWidgetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
