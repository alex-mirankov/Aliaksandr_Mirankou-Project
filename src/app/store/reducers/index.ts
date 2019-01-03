import { ActionReducerMap, createSelector, createFeatureSelector, ActionReducer, MetaReducer } from '@ngrx/store';

import * as Cards from './starter-cards';

export interface State {
    cards: Cards.State;
}

export const reducers: ActionReducerMap<State> = {
    cards: Cards.reducer
};

export function logger(reducer: ActionReducer<State>):
    ActionReducer<State> {
    return function (state: State, action: any): State {
        console.log('state', state);
        console.log('action', action);
        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<State>[] = [logger];


export const getCardsState = createFeatureSelector<Cards.State>('cards');

export const getIds = createSelector(
    getCardsState,
    Cards.getIds,
);

export const getCards = createSelector(
    getCardsState,
    Cards.getCards,
);

export const getSelected = createSelector(
    getCardsState,
    Cards.getSelected,
);

export const getSelectedCard = createSelector(
    getSelected,
    getCards,
    (selectedId, cards) => {
        return {
            ...Cards[selectedId]
        };
    }
);

export const getAllCards = createSelector (
    getIds,
    getCards,
    (ids, cards) => {
        return ids.map(id => cards[id]);
    }
);
