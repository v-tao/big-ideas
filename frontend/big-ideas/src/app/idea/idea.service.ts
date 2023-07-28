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

  getIdeaById(id : number) : Observable<Idea> {
    const url = `${environment.apiUrl}/ideas/${id}`;
    return this.http.get<Idea>(url);
  }
}
