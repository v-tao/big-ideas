import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Idea } from '../models/idea';
import { IdeaService } from './idea.service';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.css']
})
export class IdeaComponent implements OnInit {
  idea: Idea | undefined;

  constructor(private ideaService: IdeaService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = +params.get("id")!;
      this.ideaService.getIdeaById(id).subscribe(
        (idea) => {
          this.idea = idea;
          console.log(this.idea);
        }, (err) => {
          console.error(err);
        }
      )
    })
  }
}
