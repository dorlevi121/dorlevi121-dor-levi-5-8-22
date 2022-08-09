import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { interval } from 'rxjs';
import { CurrencyService } from './_services/currency.service';
import { SnackBarService } from './_services/snack-bar.service';

@Component({
  selector: 'abra-shopping-list-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('snackBar', { read: ViewContainerRef })
  entry: ViewContainerRef;

  constructor(private currencyService: CurrencyService, private snackBarSerivce: SnackBarService) { }

  ngOnInit() {
    // interval(10000).subscribe(res => {
    //   this.currencyService.getLastetExchangeRate();
    // })
  }

  ngAfterViewInit(): void {
    this.snackBarSerivce.entry = this.entry;
  }

}
