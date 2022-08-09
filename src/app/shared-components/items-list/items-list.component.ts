import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import {  Observable, Subject, takeUntil } from 'rxjs';
import { CurrencyService } from 'src/app/_services/currency.service';

export interface Title { title: string, key: string, type: 'text' | 'btn' | 'hyperlink' }

@Component({
  selector: 'abra-shopping-list-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent<T> implements OnInit, OnDestroy {

  @Input() items: any[];
  @Input() titles: Title[];
  @Output() changeStatus = new EventEmitter<any>();
  public currencyChanage: string;
  private readonly unsubscribe$: Subject<void> = new Subject();
  
  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
     this.currencyService.currentCurrencySub.pipe(
      takeUntil(this.unsubscribe$))
     .subscribe(res => {
      this.currencyChanage = res;
     });
   }

   ngOnDestroy() {
    this.unsubscribe$.complete()
  }
}
