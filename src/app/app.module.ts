import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';
import { SvgApplyComponent } from './svg-apply/svg-apply.component';
import { SvgFavComponent } from './svg-fav/svg-fav.component';
import { DislikeComponent } from './dislike/dislike.component';
import { SvgDislikeComponent } from './svg-dislike/svg-dislike.component';
import { SvgLogoComponent } from './svg-logo/svg-logo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    CardComponent,
    SvgApplyComponent,
    SvgFavComponent,
    DislikeComponent,
    SvgDislikeComponent,
    SvgLogoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
