import { Component, OnInit } from '@angular/core';
import { AllIdeasService } from './all-ideas.service';

@Component({
  selector: 'app-all-ideas',
  templateUrl: './all-ideas.component.html',
  styleUrls: ['./all-ideas.component.css']
})
export class AllIdeasComponent implements OnInit {
  ideas = null;
  constructor(private allIdeasService: AllIdeasService) { }

  ngOnInit() {
    this.allIdeasService.getIdeas().subscribe(
      (ideas: any) => {
        this.ideas = ideas;
      }, (err: any) => {
        console.error(err);
      }
    )
  }
}
