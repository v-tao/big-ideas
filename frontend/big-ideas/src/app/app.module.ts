import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeckComponent } from './deck/deck.component';
import { AllDecksComponent } from './all-decks/all-decks.component';
import { AllIdeasComponent } from './all-ideas/all-ideas.component';

@NgModule({
  declarations: [
    AppComponent,
    DeckComponent,
    AllDecksComponent,
    AllIdeasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
