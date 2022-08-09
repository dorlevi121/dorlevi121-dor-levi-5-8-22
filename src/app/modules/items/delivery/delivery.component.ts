import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Title } from 'src/app/shared-components/items-list/items-list.component';
import { AppState } from 'src/app/store/app.reducer';
import { Item } from 'src/app/_models/item';
import { ItemService } from 'src/app/_services/item.service';
import { SnackBarService } from 'src/app/_services/snack-bar.service';

@Component({
  selector: 'abra-shopping-list-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit {

  public items: Observable<{ deliveryItems: Item[] }>;
  public titles: Title[] = [
    { title: 'name', key: 'name', type: 'text' },
    { title: 'store', key: 'store', type: 'text' },
    { title: 'price', key: 'price', type: 'text' },
    { title: 'deliveryd date', key: 'deliveryDate', type: 'text' },
    { title: 'Archive', key: 'archive', type: 'btn' },
  ];
  public newItemOpen: boolean = false;

  constructor(private itemService: ItemService, private itemStore: Store<AppState>, private snackBarSerivce: SnackBarService) { }

  ngOnInit(): void {
    this.items = this.itemStore.select('item');
  }

  public toArchive(item: Item) {
    this.itemService.addItemToArchive(item);

    this.snackBarSerivce.open('Item has been to archive');
  }

  public getNewItem(item: Item) {
    this.itemService.addItem(item)
    this.newItemOpen = false;

    this.snackBarSerivce.open(`${item.name} has been added to the list`);
  }

}
