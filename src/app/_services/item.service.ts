import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Item, ItemMoke } from '../_models/item';
import { ApiService } from './api.service';
import { StoreService } from './store.service';
import { AppState } from '../store/app.reducer';
import { Store } from '@ngrx/store';
import { AddItemToArchive, AddItemToDelivery, AddNewItem } from '../modules/items/store/item.actions';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  deliveryItems: { [date: string]: Item[] } = {};
  archiveItems: { [date: string]: Item[] } = {};
  products: ItemMoke[] = [];

  constructor(private api: ApiService, private storeService: StoreService, private itemStore: Store<AppState>) {
    this.getProductsList();

    // const date = new Date().getTime();
    // const date2 = new Date().getTime() + 10;
    // const date3 = new Date().getTime() + 15;
    // const date4 = new Date().getTime() + 20;
    // this.deliveryItems[date] = [{ store: 'aaa', deliveryDate: date, id: "112", name: "res", price: 44 }];
    // this.deliveryItems[date2] = [{ store: 'aaa', deliveryDate: date2, id: "113", name: "dor", price: 44 }];
    // this.deliveryItems[date3] = [{ store: 'aaa', deliveryDate: date3, id: "114", name: "anna", price: 44 }];
    // this.deliveryItems[date4] = [{ store: 'aaa', deliveryDate: date4, id: "115", name: "matan", price: 44 }];
  }

  async getProductsList() {
    const products = await firstValueFrom(this.api.get(environment.productsApi));
    this.products = [...products];
  }

  public addItem(item: Item) {
    this.itemStore.dispatch(new AddNewItem({ item }));
    this.storeService.addProduct(item.store, item.price);
  }

  public addItemToDelivery(item: Item) {
    this.itemStore.dispatch(new AddItemToDelivery({ item }));
    this.storeService.addProduct(item.store, item.price);
  }

  public addItemToArchive(item: Item) {
    this.itemStore.dispatch(new AddItemToArchive({ item }));
    this.storeService.removeProduct(item.store, item.price);
  }
}
