import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson-card',
  templateUrl: './lesson-card.component.html',
  styleUrls: ['./lesson-card.component.css']
})
export class LessonCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  JavaJun = JSON.parse(localStorage.getItem('JavaJun'));
  Name = this.JavaJun.name;
  Level = this.JavaJun.level;
  Students = this.JavaJun.students;
  WellStudents = this.JavaJun.well_students;
  Price = this.JavaJun.price;
}

