import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyService } from '../_services/currency.service';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  constructor(private currencyService: CurrencyService) { }

  transform(value: unknown, ...args: unknown[]): unknown {    
    const usdPrice = args[1]
    const price = this.currencyService.getPrice(Number(usdPrice)) + this.currencyService.getCurrencySymbol();
    return price;
  }

}
