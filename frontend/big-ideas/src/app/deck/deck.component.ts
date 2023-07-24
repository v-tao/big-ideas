import { Component, OnInit } from '@angular/core';
import { Deck } from '../models/deck';
import { DeckService } from './deck.service';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {
  deck : any;
  constructor(private deckService: DeckService) {
    this.deck = null;
  }

  ngOnInit() {
    this.deckService.getDecks().subscribe(
      (deck) => {
        console.log(deck);
        this.deck = deck;
      }, (err) => {
        console.log(err);
      }
    )
  }
}
