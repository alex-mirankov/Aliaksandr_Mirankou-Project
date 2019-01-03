import { Action } from '@ngrx/store';
import { CardItem } from '../models/card-model';

export const SELECT = '[Cards] Select';
export const ADD_ONE = '[Cards] Add One';

export class Select implements Action {
    readonly type = SELECT;
    constructor(public payload: number) { }
}

export class AddOne implements Action {
    readonly type = ADD_ONE;
    constructor(public payload: CardItem) { }
}

export type Action = AddOne | Select;
