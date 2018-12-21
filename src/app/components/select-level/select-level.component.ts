import { Component, OnInit } from '@angular/core';

export interface Levels {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-select-level',
  templateUrl: './select-level.component.html',
  styleUrls: ['./select-level.component.css']
})
export class SelectLevelComponent {

  levels: Levels[] = [
    { value: 'allLevels-0', viewValue: 'Все уровни' },
    { value: 'junior-1', viewValue: 'Начинающий' },
    { value: 'mid-2', viewValue: 'Средний' },
    { value: 'senior-3', viewValue: 'Продвинутый' }
  ];
}
