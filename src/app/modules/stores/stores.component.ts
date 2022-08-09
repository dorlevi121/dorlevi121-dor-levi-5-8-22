import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.reducer';
import { StoreService } from 'src/app/_services/store.service';

@Component({
  selector: 'abra-shopping-list-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit, OnDestroy {

  public storesList: { name: string, quantity: number, totalPrice: number }[];
  public storeList$: Subscription;
  public titles: { title: string, key: string, type: 'text' | 'btn' | 'hyperlink' }[] = [
    {
      title: 'Store',
      key: 'name',
      type: 'text'
    },
    {
      title: 'Quantity',
      key: 'quantity',
      type: 'text'
    },
    {
      title: 'Total Price',
      key: 'totalPrice',
      type: 'text'
    }
  ]

  constructor(private storeService: StoreService, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.storeList$ = this.store.select('store').subscribe(res => {
      this.storesList = Object.values(res.storeDetails)
    })
  }

  ngOnDestroy(): void {
    this.storeList$.unsubscribe();
  }
}
