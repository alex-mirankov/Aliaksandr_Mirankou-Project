import { Action } from '@ngrx/store';
import { LocalStoreService, setJavaJun } from '../../services/local-store.service';

import * as cardsAction from '../actions/cards-action';

import { CardItem } from '../models/card-model';

export interface State {
    ids: number[];
    cards: { [id: number]: CardItem };
    selected: number;
}

export const initialState: State = {
    ids: [1, 2, 3],
    cards: {
        1: {
            id: 1,
            name: 'JavaJun',
            level: 'начинающий',
            image: 'https://drive.google.com/open?id=1xE-LpAfL7t6J_HrjA8xzdKJI9TGPYdR_',
            students: 100,
            wellStudents: 200,
            price: '26$'
        },
        2: {
            id: 2,
            name: 'JavaMiddle',
            level: 'средний',
            image: 'https://drive.google.com/open?id=1xE-LpAfL7t6J_HrjA8xzdKJI9TGPYdR_',
            students: 120,
            wellStudents: 220,
            price: '76$'
        },
        3: {
            id: 3,
            name: 'JavaSenior',
            level: 'продвинутый',
            image: 'https://drive.google.com/open?id=1xE-LpAfL7t6J_HrjA8xzdKJI9TGPYdR_',
            students: 140,
            wellStudents: 270,
            price: '176$'
        },
    },
    selected: null,
};

export function reducer(state = initialState,
action: cardsAction.Action) {
    switch (action.type) {
        case cardsAction.ADD_ONE: {
            const newCard: CardItem = action.payload;
            return {
                ...state,
                ids: [...state.ids, newCard.id],
                cards: { ...state.cards, newCard }
            };
        }
        case cardsAction.SELECT: {
            const id = action.payload;
            return {
                ...state,
                selected: id
            };
        }
        default:
            return state;
    }
}

export const getIds = (state: State) => state.ids;
export const getCards = (state: State) => state.cards;
export const getSelected = (state: State) => state.selected;
