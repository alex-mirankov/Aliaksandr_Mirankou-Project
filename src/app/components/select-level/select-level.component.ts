import { Component, OnInit, Output, EventEmitter } from '@angular/core';

export interface Levels {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-select-level',
  templateUrl: './select-level.component.html',
  styleUrls: ['./select-level.component.css']
})
export class SelectLevelComponent implements OnInit {
  levels: Levels[];

  @Output() levelSelectChange = new EventEmitter();

  ngOnInit() {
    this.levels = [
      { value: 'allLevels-0', viewValue: 'Все уровни' },
      { value: 'junior-1', viewValue: 'Начинающий' },
      { value: 'mid-2', viewValue: 'Средний' },
      { value: 'senior-3', viewValue: 'Продвинутый' }
    ];
  }

  onChange(e: string) {
    this.levelSelectChange.emit(e);
  }
}
