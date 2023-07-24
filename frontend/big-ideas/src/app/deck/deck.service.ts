import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  constructor(private http: HttpClient) { }

  getDecks() {
    const url = "localhost:3000/decks";
    return this.http.get(url);
  }
}
