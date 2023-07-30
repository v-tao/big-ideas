import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeckComponent } from './deck/deck.component';
import { AllDecksComponent } from './all-decks/all-decks.component';
import { AllIdeasComponent } from './all-ideas/all-ideas.component';
import { IdeaComponent } from './idea/idea.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DeckComponent,
    AllDecksComponent,
    AllIdeasComponent,
    IdeaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'dev-edxfvmyn17fhrpuf.us.auth0.com',
      clientId: 'zrugOxx0PqHgX220rNyl0YvEkT6MtMGj',
      authorizationParams: {
        redirect_uri: 'http://localhost:4200/decks',
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
