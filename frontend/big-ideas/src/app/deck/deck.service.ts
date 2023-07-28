import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Deck } from '../models/deck';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  constructor(private http: HttpClient) { }

  getDeckById(id: number): Observable<Deck> {
    const url = `${environment.apiUrl}/decks/${id}`;
    return this.http.get<Deck>(url);
  }
}
