import { DoublePipe } from './pipes/double.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/list/list.component';
import { CardComponent } from './components/card/card.component';
import { DislikeIconComponent } from './ui/dislike-icon/dislike-icon.component';
import { FavoriteIconComponent } from './ui/favorite-icon/favorite-icon.component';
import { ErrorComponent } from './components/error/error.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    CardComponent,
    DoublePipe,
    DislikeIconComponent,
    FavoriteIconComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
