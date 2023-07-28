import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AllIdeasService {

  constructor(private http: HttpClient) { }

  getIdeas() {
    const url = `${environment.apiUrl}/ideas`;
    return this.http.get(url);
  }
}
