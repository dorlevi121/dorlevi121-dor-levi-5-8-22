import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { CurrencyPipe } from './currency.pipe';

const components = [
  SnackBarComponent,
  ItemsListComponent,
  CurrencyPipe
];

@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule
  ],
  exports: [
    components
  ]
})
export class SharedComponentsModule { }
