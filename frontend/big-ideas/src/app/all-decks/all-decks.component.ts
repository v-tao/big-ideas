import { Component, OnInit } from '@angular/core';
import { AllDecksService } from './all-decks.service';

@Component({
  selector: 'app-all-decks',
  templateUrl: './all-decks.component.html',
  styleUrls: ['./all-decks.component.css']
})
export class AllDecksComponent implements OnInit {
  decks = null;
  constructor(private allDecksService: AllDecksService) {
  }

  ngOnInit() {
    this.allDecksService.getDecks().subscribe(
      (decks: any) => {
        this.decks = decks;
      }, (err: any) => {
        console.log(err);
      }
    )
  }
}
