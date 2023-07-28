import { Component, OnInit } from '@angular/core';
import { DeckService } from './deck.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {
  deck : any;
  constructor(private deckService: DeckService, private route: ActivatedRoute) {
    this.deck = {
      title: null,
      description: null,
      ideas: []
    };
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = +params.get("id")!;
      this.deckService.getDeckById(id).subscribe(
        (deck: any) => {
          this.deck = deck;
          console.log(this.deck);
        }, (err: any) => {
          console.log(err);
        }
      )
    })
  }
}
