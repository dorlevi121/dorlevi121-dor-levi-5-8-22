import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.reducer';
import { Item, ItemMoke } from 'src/app/_models/item';
import { ItemService } from 'src/app/_services/item.service';
import { StoreService } from 'src/app/_services/store.service';
import * as storeModel from '../../../../_models/store';

@Component({
  selector: 'abra-shopping-list-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  @Output() closeModal = new EventEmitter();
  @Output() getNewItem = new EventEmitter<Item>();


  public productsList: ItemMoke[];
  public stores: Observable<{stores: storeModel.Store[]}>;
  public date = new Date();
  public form: FormGroup;
  public product = '';

  constructor(private fb: FormBuilder, private itemService: ItemService, private storeService: StoreService, 
    private store: Store<AppState>) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      store: ['', [Validators.required, Validators.minLength(2)]],
      deliveryDate: [this.date, [Validators.required]],
      price: ['', [Validators.required]],
    });

    this.productsList = this.itemService.products;
    this.stores = this.store.select('store');
  }

  public submit() {
    if (!this.form.valid)
      return;

    const newItem: Item = {
      id: '',
      name: this.form.value['name'].title || this.form.value['name'],
      store: this.form.value['store'].name || this.form.value['store'],
      price: this.form.value['price'],
      deliveryDate: new Date(this.form.value['deliveryDate']).getTime()
    }
    this.getNewItem.next(newItem);
  }
}
