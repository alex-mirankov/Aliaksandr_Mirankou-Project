import { Component, OnInit } from '@angular/core';
import { GetLessonsService } from '../../services/get-lessons.service';

@Component({
  selector: 'app-home-work',
  templateUrl: './home-work.component.html',
  styleUrls: ['./home-work.component.css']
})
export class HomeWorkComponent implements OnInit {

  private lessons = this.array.lessons;
  constructor(private array: GetLessonsService) { }

  ngOnInit() {
  }

}
