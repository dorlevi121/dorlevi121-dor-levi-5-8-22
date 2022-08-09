import { ActionReducerMap } from '@ngrx/store';
import { itemReducer, ItemState } from '../modules/items/store/item.reducer';
import { storeReducer, StoreState } from '../modules/stores/store/store.reducer';

export interface AppState {
  item: ItemState,
  store: StoreState
}

export const appReducer: ActionReducerMap<AppState> = {
  item: itemReducer,
  store: storeReducer
};
