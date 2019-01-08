import { Component, OnInit, Input } from '@angular/core';
import { GetCardsService } from '../../services/get-cards.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { GetLessonsService } from '../../services/get-lessons.service';

@Component({
  selector: 'app-lesson-card',
  templateUrl: './lesson-card.component.html',
  styleUrls: ['./lesson-card.component.css']
})
export class LessonCardComponent implements OnInit {

  private items = this.array.cards;
  private sub: Subscription;
  private id: string;

  constructor(private array: GetCardsService, private activeRouts: ActivatedRoute, private lessonContent: GetLessonsService) {
    this.sub = activeRouts.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit() {

  }
}

