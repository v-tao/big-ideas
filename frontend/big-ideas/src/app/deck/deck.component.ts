import { Component, OnDestroy, OnInit } from '@angular/core';
import { DeckService } from './deck.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Deck } from '../models/deck';
import { Idea } from '../models/idea';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit, OnDestroy {
  deck : Deck | undefined;
  private subscriptions: Subscription[] = [];
  constructor(
    private deckService: DeckService, 
    private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit() {
    this.getDeckById();
  }

  getDeckById() {
    const getDeckByIdSubscription = this.route.paramMap.subscribe(params => {
      const id = +params.get('id')!;
      this.deckService.getDeckById(id).subscribe({
        next: (deck: Deck) => this.deck = deck,
        error: (err) => console.error(err)
      })
    });
    this.subscriptions.push(getDeckByIdSubscription);
  }

  removeIdeaFromDeck(ideaId: number) {
    if (this.deck) {
      this.deck.ideas = this.deck.ideas.filter((idea: Idea) => idea.id != ideaId);
    }
    const removeIdeaFromDeckParamSubscription = this.route.paramMap.subscribe(params => {
      const deckId = +params.get('id')!;
      const removeIdeaFromDeckSubscription = this.deckService.removeIdeaFromDeck(deckId, ideaId).subscribe({
        error: (err) => console.error(err)
      })
      this.subscriptions.push(removeIdeaFromDeckSubscription);
    })
    this.subscriptions.push(removeIdeaFromDeckParamSubscription);
  }

  deleteDeckById() {
    const deleteDeckByIdSubscription = this.route.paramMap.subscribe(params => {
      const id = +params.get('id')!;
      this.deckService.deleteDeckById(id).subscribe({
        next: () => this.router.navigate(['/decks']),
        error: (err) => console.error(err)
      })
    })
    this.subscriptions.push(deleteDeckByIdSubscription);
  }

  ngOnDestroy() {
    for (let subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }
}
