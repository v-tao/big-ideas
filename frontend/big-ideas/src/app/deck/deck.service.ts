import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Deck } from '../models/deck';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  constructor(private http: HttpClient) { }

  getDeckById(id: number): Observable<Deck> {
    const url = `${environment.apiUrl}/decks/${id}`;
    return this.http.get<Deck>(url);
  }

  removeIdeaFromDeck(deckId: number, ideaId: number): Observable<Deck> {
    const url=`${environment.apiUrl}/decks/${deckId}/ideas/${ideaId}`;
    return this.http.delete<Deck>(url);
  }

  deleteDeckById(id: number): Observable<Deck> {
    const url = `${environment.apiUrl}/decks/${id}`;
    return this.http.delete<Deck>(url);
  }
}
