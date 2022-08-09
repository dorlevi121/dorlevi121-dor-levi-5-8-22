import { Component, OnInit } from '@angular/core';
import { Currency } from 'src/app/_models/currency';
import { CurrencyService } from 'src/app/_services/currency.service';

export interface MenuItem {
  title: string;
  path: string;
}

@Component({
  selector: 'abra-shopping-list-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  public menuItems: MenuItem[];
  public currencies: string[];
  public currentCurrency: string;

  constructor(private currencyService: CurrencyService) {
    this.currencies = Object.keys(Currency);
    this.currentCurrency = this.currencyService.currentCurrency;
    this.menuItems = [
      {
        title: 'Items',
        path: '/items'
      },
      {
        title: 'Stores',
        path: '/stores'
      }
    ]
  }

  ngOnInit(): void {
  }

  chnageCurrency(event: any): void {
    this.currencyService.changeCurrency(event.target.value);
    this.currentCurrency = event.target.value;
  }
}
