import { Component, OnInit } from '@angular/core';
import { Deck } from '../models/deck';
import { DeckService } from './deck.service';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {
  decks : any;
  constructor(private deckService: DeckService) {
    this.decks = null;
  }

  ngOnInit() {
    this.deckService.getDecks().subscribe(
      (decks) => {
        this.decks = decks;
      }, (err) => {
        console.log(err);
      }
    )
  }
}
