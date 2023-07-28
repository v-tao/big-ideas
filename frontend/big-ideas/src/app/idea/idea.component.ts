import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Idea } from '../models/idea';
import { IdeaService } from './idea.service';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.css']
})
export class IdeaComponent implements OnInit {
  idea: Idea | undefined;

  constructor(private ideaService: IdeaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = +params.get("id")!;
      this.ideaService.getIdeaById(id).subscribe(
        {
          next: (idea) => this.idea = idea,
          error: (e) => console.error(e),
        }
      )
    })
  }

  deleteIdea() {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id')!;
      this.ideaService.deleteIdeaById(id).subscribe(
        {
          next: () => this.router.navigate(['/ideas']),
        }
      )
    })
  }
}
