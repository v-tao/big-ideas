import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Idea } from '../models/idea';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IdeaService {

  constructor(private http: HttpClient) { }

  getIdeaById(id: number): Observable<Idea> {
    const url = `${environment.apiUrl}/ideas/${id}`;
    return this.http.get<Idea>(url);
  }

  updateIdeaById(idea: Idea): Observable<Idea> {
    const url= `${environment.apiUrl}/ideas/${idea.id}`;
    return this.http.put<Idea>(url, idea);
  }

  deleteIdeaById(id: number): Observable<Idea> {
    const url = `${environment.apiUrl}/ideas/${id}`;
    return this.http.delete<Idea>(url);
  }
}
