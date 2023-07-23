import { Component } from '@angular/core';
import { Deck } from '../models/deck';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent {
  deck : Deck | null;
  constructor() {
    this.deck = null;
  }
}
