import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AllDecksService {

  constructor(private http: HttpClient) { }

  getDecks(): any {
    const url = `${environment.apiUrl}/decks/`;
    return this.http.get(url);
  }
}
