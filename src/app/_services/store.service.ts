import { Injectable } from '@angular/core';
import { uniqueId } from 'lodash'
import { AppState } from '../store/app.reducer';
import { Store } from '@ngrx/store';
import { AddItemToStore, RemoveItemFromStore } from '../modules/stores/store/store.action';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private store: Store<AppState>) { }

  public addProduct(storeName: string, price: number) {
    this.store.dispatch(new AddItemToStore({ storeName, price }))
  }

  public removeProduct(storeName: string, price: number) {
    this.store.dispatch(new RemoveItemFromStore({ storeName, price }));
  }
}
