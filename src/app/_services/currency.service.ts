import { Injectable } from '@angular/core';
import { firstValueFrom, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Currency } from '../_models/currency';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  public currentCurrency: Currency = Currency.USD;
  public currentCurrencySub: Subject<Currency> = new Subject<Currency>();
  private currencyLastetExchange: { [symbol: string]: number } = {
    "ILS": 3.3,
    "USD": 1,
    "GBP": 0.83
  };
  private currencySymbol: { [symbol: string]: string } = {
    "ILS": '₪',
    "USD": '$',
    "GBP": '£'
  };

  constructor(private api: ApiService) { }

  public getLastetExchangeRate() {
    firstValueFrom(this.api.get(`${environment.currenctApi}/lasted`,
      { symbols: 'ils', base: "usd" },
      { "apiKey": environment.currencyApk }
    ))
      .then(res => {
        this.currencyLastetExchange = res.rates;
      })
  }

  public changeCurrency(currency: 'ILS' | 'USD' | 'GBP') {
    this.currentCurrency = Currency[currency];
    this.currentCurrencySub.next(this.currentCurrency);
  }

  public getPrice(price: number): number {
    return price * this.currencyLastetExchange[this.currentCurrency];
  }

  public getCurrencySymbol(): string {
    return this.currencySymbol[this.currentCurrency];
  }
}
