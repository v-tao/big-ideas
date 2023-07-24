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
    this.deck = {
      title: null,
      description: null,
      ideas: []
    };
  }

  ngOnInit() {
    this.deckService.getDeckById(3).subscribe(
      (deck: any) => {
        this.deck = deck;
        console.log(this.deck);
      }, (err: any) => {
        console.log(err);
      }
    )
  }
}
