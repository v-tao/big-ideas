import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  constructor(private http: HttpClient) { }

  getDeckById(id: number): any {
    const url = `${environment.apiUrl}/decks/${id}`;
    return this.http.get(url);
  }
}
