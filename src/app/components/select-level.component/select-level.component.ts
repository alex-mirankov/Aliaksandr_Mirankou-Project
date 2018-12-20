import { Component } from '@angular/core';

export interface Levels {
    value: string;
    viewValue: string;
}

@Component ({
    // tslint:disable-next-line:component-selector
    selector: 'my-select-level',
    templateUrl: 'select-level.component.html',
    styleUrls: ['select-level.component.css']
})

export class SelectLevelComponent {
    levels: Levels[] = [
        {value: 'allLevels-0', viewValue: 'Все уровни сложностей'},
        {value: 'junior-1', viewValue: 'Начинающий'},
        {value: 'middle-2', viewValue: 'Средний'},
        {value: 'senior-3', viewValue: 'Продвинутый'}
      ];
}
