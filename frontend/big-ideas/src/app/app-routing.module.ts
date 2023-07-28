import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllDecksComponent } from './all-decks/all-decks.component';
import { AllIdeasComponent } from './all-ideas/all-ideas.component';
import { DeckComponent } from './deck/deck.component';

const routes: Routes = [
  { path: '', component: DeckComponent },
  { path: 'decks', component: AllDecksComponent },
  { path: 'decks/:id', component: DeckComponent },
  { path: 'ideas', component: AllIdeasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
