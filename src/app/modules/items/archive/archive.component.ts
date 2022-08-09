import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Title } from 'src/app/shared-components/items-list/items-list.component';
import { AppState } from 'src/app/store/app.reducer';
import { Item } from 'src/app/_models/item';
import { ItemService } from 'src/app/_services/item.service';
import { SnackBarService } from 'src/app/_services/snack-bar.service';

@Component({
  selector: 'abra-shopping-list-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {


  public items: Observable<{ archiveItems: Item[] }>;
  public titles: Title[] = [
    { title: 'name', key: 'name', type: 'text' },
    { title: 'store', key: 'store', type: 'text' },
    { title: 'price', key: 'price', type: 'text' },
    { title: 'deliveryd date', key: 'deliveryDate', type: 'text' },
    { title: 'Delivery', key: 'delivery', type: 'btn' },
  ];

  constructor(private itemService: ItemService, private store: Store<AppState>, private snackBarSerivce: SnackBarService) { }

  ngOnInit(): void {
    this.items = this.store.select('item');
  }

  toDelivery(item: Item) {
    this.itemService.addItemToDelivery(item);

    this.snackBarSerivce.open('Item has been to delivery')
  }

}
