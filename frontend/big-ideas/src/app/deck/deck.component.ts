import { Component, OnDestroy, OnInit } from '@angular/core';
import { DeckService } from './deck.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Deck } from '../models/deck';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit, OnDestroy {
  deck : Deck | undefined;
  private subscriptions: Subscription[] = [];
  constructor(private deckService: DeckService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getDeckById();
  }

  getDeckById() {
    const getDeckByIdSubscription = this.route.paramMap.subscribe(params => {
      const id = +params.get('id')!;
      this.deckService.getDeckById(id).subscribe({
        next: (deck: Deck) => this.deck = deck,
        error: (err) => console.error(err),
      })
    });
    this.subscriptions?.push(getDeckByIdSubscription);
  }

  ngOnDestroy() {
    for (let subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }
}
